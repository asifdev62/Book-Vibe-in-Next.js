
import Image from "next/image";
import React from "react";
import Logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm py-3 border-b border-gray-200">
      <div className="navbar max-w-7xl mx-auto px-1 sm:px-4 md:px-6 lg:px-14 xl:px-20">


        <div className="navbar-start min-w-0">

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden px-1"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/listedBooks">Listed Books</Link>
              </li>
              <li>
                <Link href="/read-books">Read Books</Link>
              </li>
            </ul>
          </div>

        
          <div className="flex items-center min-w-0 gap-0">
            <Image
              src={Logo}
              alt="Book Vibe Logo"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />

            <Link
              href="/"
              className="btn btn-ghost text-sm sm:text-lg font-bold px-1 sm:px-2 whitespace-nowrap"
            >
              Book Vibe
            </Link>
          </div>
        </div>

     
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
            <li>
              <Link href="/listedBooks">Listed Books</Link>
            </li>
            <li>
              <Link href="/read-books">Read Books</Link>
            </li>
          </ul>
        </div>

    
        <div className="navbar-end gap-1 sm:gap-2 md:gap-4 shrink-0">

          <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md px-2 sm:px-3">
            Sign In
          </button>

          <button className="btn btn-error btn-xs sm:btn-sm md:btn-md px-2 sm:px-3">
            Sign Up
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar; 