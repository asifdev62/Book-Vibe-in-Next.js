
import { IBook } from '@/type/booksType';
import BookCard from '@/components/shared/BookCard';

const getBooks = async () => {
  try{
 const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
   const data = await response.json();
  return data;
}catch(error){
  console.error("Error fetching books data:", error);
  return[]
}
}


const Books = async() => {  
    const booksData = await getBooks();
    console.log(booksData)
    return (
      <section>
        <div className='text-center mb-10 space-y-2 mt-15'>
            <h3 className='text-[#00D390] font-bold'>Our Collections</h3>
            <h2 className='text-3xl font-bold text-gray-800'>Explore All Books</h2>
            <p className='text-gray-500'>Discover amazing stories, timeless classics, and inspiring books from talented authors.</p>
        </div>
            <div className=' px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
            booksData.map((book:IBook) =>{
                return <BookCard key={book.bookId} book={book}></BookCard>
                
            })
        }
            </div>
      </section>
    );
};

export default Books;