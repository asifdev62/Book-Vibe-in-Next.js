import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/WishlistButton';
import { IBook } from '@/type/booksType';
import Image from 'next/image';
import fs from "fs/promises";
import path from "path";

interface IBookDetailsPage {
    params: {
        id: string
    };
};

const getBooks = async () => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "booksData.json"
    );

    const file = await fs.readFile(filePath, "utf-8");

    return JSON.parse(file);
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};



const BookDetailPage = async ({ params }: IBookDetailsPage) => {

    const { id } = await params;
    const booksData = await getBooks();

    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id)
    ) as IBook
    if (!book) {
        return <div>Book not found</div>
    }
    console.log(book, "id")

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-100 overflow-hidden m-15">

            {/* Image */}
            <figure className="lg:w-2/5 bg-linear-to-br from-green-50 to-emerald-100 p-8">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={300}
                    height={400}
                    className="w-full max-w-65 h-87.5 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </figure>

            {/* Content */}
            <div className="card-body lg:w-3/5 p-6 md:p-8">

                {/* Category */}
                <div>
                    <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                        {book.category}
                    </span>
                </div>

                {/* Title */}
                <h2 className="card-title text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="text-gray-500 text-base">
                    by{" "}
                    <span className="font-semibold text-gray-700">
                        {book.author}
                    </span>
                </p>

                {/* Rating + Pages */}
                <div className="flex flex-wrap items-center gap-4 mt-2">

                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span className="font-semibold text-gray-700">
                            {book.rating}
                        </span>
                    </div>

                    <span className="text-gray-300">|</span>

                    <span className="text-gray-500">
                        {book.totalPages} pages
                    </span>
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-2">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-gray-50 rounded-xl">

                    <div>
                        <p className="text-xs text-gray-400">
                            Publisher
                        </p>
                        <p className="font-semibold text-gray-700">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Published
                        </p>
                        <p className="font-semibold text-gray-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <div className="card-actions justify-end mt-4">
                <ReadButton book={book}></ReadButton>

                <WishlistButton book={book}></WishlistButton>
                </div>

            </div>
        </div>
    );
};

export default BookDetailPage;