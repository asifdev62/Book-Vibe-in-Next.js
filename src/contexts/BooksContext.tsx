"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { IBook } from "../type/booksType";

interface BookContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;

   wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

// export const BookContext = createContext<BookContextType | null>(null);
export const BookContext = createContext<BookContextType>({
  readBooks: [],
  setReadBooks:()=>{},
  wishlist: [],
  setWishlist: ()=>{}

})

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BookContext.Provider value={sharedData}>
      {children}
    </BookContext.Provider>
  );
};

export default BooksProvider;