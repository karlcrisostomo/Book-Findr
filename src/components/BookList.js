import React, { useState, useEffect } from "react";
import { useProvider } from "../context/ResultContext";
import { useNavigate } from "react-router-dom";

import Loader from "./Loader";
import Result from "./Result";

const BookList = () => {
  const { searchQuery } = useProvider();
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false); //state to track errors
  const navigate = useNavigate();
  const handleAPIError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("searchResults")); // Retrieve stored search results from local storage

    if (storedResults && storedResults.length > 0) {
      // Use stored results if available
      setLoading(false);
    } else if (searchQuery.length > 0) {
      setLoading(false);
    } else if (searchQuery.length === 0) {
      return <Result />;
    } else {
      handleAPIError();
    }
  }, [searchQuery]);

  return (
    <>
      {searchQuery.length === 0 && <Result />}
      <div className="pt-24 grid grid-cols-3 max-sm:grid-cols-1 gap-10 xl:max-w-[1280px] mx-auto px-7">
        {isLoading
          ? searchQuery.map((_, idx) => <Loader key={idx} />)
          : hasError
          ? navigate("/error")
          : searchQuery.map((book, idx) => (
              <a
                href={`https://books.google.com.ph/books?id=${book.id}&source=gbs_navlinks_s`}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="py-10 hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-200 xl:max-w-md xl:flex mb-16 p-4 rounded-lg bg-white"
              >
                <img
                  className="w-full border-2 xl:-translate-y-24 relative aspect-auto lg:w-[15rem] lg:h-[20rem] xl:h-[14rem] xl:w-[10rem] mx-auto"
                  src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w256-h256`}
                  alt={book.volumeInfo.title}
                />
                <div className="px-4 md:px-5 pt-4">
                  <h1 className="font-bold">{book.volumeInfo.title}</h1>
                  <h1>
                    Authors:{" "}
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors
                      : "Unknown"}
                  </h1>
                  <h1>
                    Publisher:{" "}
                    {book.volumeInfo.publisher
                      ? book.volumeInfo.publisher
                      : "Unknown"}
                  </h1>
                  <h1>
                    Published:{" "}
                    {book.volumeInfo.publishedDate
                      ? book.volumeInfo.publishedDate
                      : "Unknown"}
                  </h1>
                </div>
              </a>
            ))}
      </div>
    </>
  );
};

export default BookList;
