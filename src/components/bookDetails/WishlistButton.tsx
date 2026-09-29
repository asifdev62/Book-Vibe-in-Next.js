'use client';
import { BookContext } from '@/contexts/BooksContext';
import { IBook } from '@/type/booksType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const WishlistButton = ({book}: {book: IBook}) => {
   
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('WishlistButton must be used inside BooksProvider');
  }

  const { wishlist, setWishlist } = context;    
const handleAddToWishlist = ()=>{
    console.log('wishlist book btn triggerd', book);
    setWishlist([...wishlist, book]);

    toast.success(`You have read "${book.bookName}" to your wishlist`);

}
    
    return (
            <button onClick={handleAddToWishlist} className="btn bg-[#00D390] hover:bg-green-500 text-white border-none px-6">
                        Wishlist
                    </button>
    );
};

export default WishlistButton;


