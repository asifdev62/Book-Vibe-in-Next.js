
import { IBook } from '@/type/booksType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen, FaStar } from 'react-icons/fa';

interface IListedBooksCardProps {
  book: IBook;
}

const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <div
      key={book.bookId}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:p-4"
    >
      {/* Book Image */}
      <div className="flex h-52 w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 p-3 sm:h-auto sm:w-32 md:w-36">
        <Image
          src={book.image}
          alt={book.bookName}
          width={120}
          height={170}
          className="h-44 w-auto object-contain transition duration-300 group-hover:scale-105 sm:h-40"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-between pt-4 sm:pl-4 sm:pt-0 md:pl-5">
        <div>
          {/* Category + Rating */}
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="truncate text-xs font-medium text-green-600">
              {book.category}
            </span>

            <div className="flex shrink-0 items-center gap-1 text-sm">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{book.rating}</span>
            </div>
          </div>

          {/* Book Name */}
          <h2 className="line-clamp-2 text-base font-bold text-gray-800 sm:text-lg md:text-xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 truncate text-sm text-gray-500">
            By {book.author}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {book.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-green-50 px-2.5 py-1 text-xs text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Pages */}
          <p className="mt-3 text-xs text-gray-500">
            {book.totalPages} Pages
          </p>
        </div>

      
        <div className="mt-4">
          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-sm w-full bg-green-600 text-white hover:bg-green-700"
          >
            <FaBookOpen />
            Details
          </Link>
       
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;



