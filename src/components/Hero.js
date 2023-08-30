import React, { useState, useEffect } from "react";
import { fetchBooks } from "../api/books";

import LinkButton from "./LinkButton";

const Header = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getCacheData = () => {
      const cachedData = JSON.parse(localStorage.getItem("cachedBook"));

      if (cachedData) {
        setBook(cachedData);
      } else {
        fetchData();
      }
    };

    const fetchData = async () => {
      const fetchedBooks = await fetchBooks("The 48 Laws of Power");

      if (fetchedBooks.length > 0) {
        const fetchedBook = fetchedBooks[0];
        setBook(fetchedBook);
        localStorage.setItem("cachedBook", JSON.stringify(fetchedBook));
      }
    };

    getCacheData();
  }, []);
  const maxDescriptionLength = 689; // shortened the description to a desired substring
  return (
    <div className=" py-20 bg-white   lg:py-80  ">
      <div className=" container mx-auto   max-sm:p-4 max-sm:pt-20 ">
        {book && (
          <div className=" lg:grid-cols-2 lg:grid   max-sm:max-w-xs mx-auto  sm:max-w-lg lg:max-w-full lg:gap-20 ">
            {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail && (
                <img
                  className="mx-auto w-full lg:w-[400px]  lg:translate-y-[10em]  xl:translate-y-[6em]    xl:p-0     max-sm:pb-16"
                  src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w256-h256`}
                  alt={book.volumeInfo.title}
                />
              )}
            <div className=" lg:px-10    max-sm:max-w-xs max-sm:p-4 sm:pt-16 ">
              <h1 className=" sm:text-4xl font-bold max-sm:text-2xl ">
                {book.volumeInfo.title}
              </h1>
              <h1 className=" max-sm:text-sm text-xl max-sm:pb-6 pt-8">
                Author: {book.volumeInfo.authors.join(", ")}
              </h1>
              <h1 className=" max-sm:text-sm text-xl max-sm:pb-6">
                Publisher: {book.volumeInfo.publisher}
              </h1>
              <h1 className=" max-sm:text-sm text-xl max-sm:pb-6 pb-14">
                Published: {book.volumeInfo.publishedDate}
              </h1>
              <p className=" leading-snug sm:leading-relaxed text-justify max-sm:pt-6 max-sm:pb-5 sm:text-xl sm:pb-14">
                {book.volumeInfo.description.substring(0, maxDescriptionLength)}
              </p>

              <LinkButton book={book} className=" sm:w-[80%] mx-auto lg:w-[70%] text-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
