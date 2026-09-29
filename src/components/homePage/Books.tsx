import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/type/booksType";
import fs from "fs/promises";
import path from "path";

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

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="w-full">
      <div className="text-center mb-10 space-y-2 px-4">
        <h3 className="text-[#00D390] font-bold">
          Our Collections
        </h3>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Explore Popular Books
        </h2>

        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          Discover amazing stories, timeless classics, and inspiring books
          from talented authors.
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {booksData.slice(0, 6).map((book: IBook) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;