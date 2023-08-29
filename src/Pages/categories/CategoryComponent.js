import React, { useState, useEffect } from "react";
import { fetchBooks } from "../../api/books";
import Loader from "../../components/Loader";
import "swiper/css";
import "swiper/css/pagination";

const CategoryComponent = ({ genre }) => {
  const [isLoading, setLoading] = useState(true);
  const [cachedBooks, setCachedBooks] = useState([]);

  useEffect(() => {
    const getCachedData = async () => {
      const cachedData = JSON.parse(localStorage.getItem(genre));
      if (cachedData) {
        setCachedBooks(cachedData);
        setLoading(false);
      } else {
        fetchAndCacheData();
      }
    };

    const fetchAndCacheData = async () => {
      try {
        const fetchedData = await fetchBooks(genre);
        setCachedBooks(fetchedData);
        localStorage.setItem(genre, JSON.stringify(fetchedData));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCachedData();
  }, [genre]);

  return (
    <div id={genre} className="px-6 pt-[10em]">
      <h2 className="font-Martian max-sm:text-4xl sm:text-5xl lg:text-5xl lg:mb-11 xl:max-w-3xl xl:ml-28 xl:text-6xl text-xl tracking-widest font-bold">
        {genre}
      </h2>

      <div className="pt-24 grid grid-cols-3 max-sm:grid-cols-1 gap-10 xl:max-w-[1280px] mx-auto">
        {isLoading
          ? cachedBooks.map((_, idx) => <Loader key={idx} />)
          : cachedBooks.map((book, idx) => (
              <a
                href={`https://books.google.com.ph/books?id=${book.id}&source=gbs_navlinks_s`}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="py-10 hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-200 xl:max-w-md xl:flex mb-16 p-4 rounded-lg bg-white"
              >
                <img
                  className="w-full xl:-translate-y-24 relative aspect-auto lg:w-[15rem] lg:h-[20rem] xl:h-[14rem] xl:w-[10rem] mx-auto"
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
    </div>
  );
};

export default CategoryComponent;
