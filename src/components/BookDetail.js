import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBooks } from "../api/books";
import Loader from "./Loader";
import LinkButton from "./LinkButton";

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const fetchBookDetails = await fetchBooks(id);
        setBookDetails(fetchBookDetails[0]); // Assuming fetchBooks returns an array
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBookDetails();
  }, [id]);

  const maxDescription = 250;

  return (
    <div className="  sm:pt-[20%] lg:pt-10  p-6     mx-auto container">
      {isLoading ? (
        <Loader
          classname=" max-sm:translate-y-1/2 max-sm:max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl border-2  mx-auto"
          width={1024}
          customX={400}
          customY={50}
          customY2={80}
        />
      ) : (
        <div className=" h-screen">
          <figure className="  sm:flex gap-2 lg:px-5 min-[500px]:pt-12  lg:text-lg xl:max-w-5xl mx-auto 2xl:max-w-6xl ">
            <div className=" flex-none ">
              <a
                href={`https://books.google.com.ph/books?id=${bookDetails.id}&source=gbs_navlinks_s`}
                target="_blank"
                rel="noopener noreferrer"
                key={bookDetails.id}
              >
                <img
                  className="  max-sm:w-[20em]  sm:w-[20em] sm:h-[27em] lg:h-[30em]    mx-auto  sm:aspect-square "
                  src={`https://books.google.com/books/publisher/content/images/frontcover/${bookDetails.id}?fife=w256-h256`}
                  alt={bookDetails.volumeInfo.title}
                />
              </a>
            </div>
            <div className=" max-sm:mt-6  max-sm:max-w-xs  h-fit sm:max-w-sm md:max-w-md max-sm:rounded-b-lg p-4 sm:rounded-lg  lg:max-w-lg xl:max-w-xl  border-2 mx-auto px-5 lg:px-8 pt-5 ">
              <h1 className="font-medium">
                Title: {bookDetails.volumeInfo.title}
              </h1>
              <p>
                Authors:
                {bookDetails.volumeInfo.authors
                  ? bookDetails.volumeInfo.authors
                  : "unknown"}
              </p>
              <p>
                Publisher:
                {bookDetails.volumeInfo.publisher
                  ? bookDetails.volumeInfo.publisher
                  : "Unknown"}
              </p>
              <p>
                Published:
                {bookDetails.volumeInfo.publishedDate
                  ? bookDetails.volumeInfo.publishedDate
                  : "Unknown"}
              </p>
              <p className=" text-justify ">
                <span className="font-bold ">Description:</span> <br />
                {bookDetails.volumeInfo.description
                  ? `${bookDetails.volumeInfo.description.substring(
                      0,
                      maxDescription
                    )}...`
                  : "Unknown"}
              </p>

              <div className=" pt-2">
                <LinkButton className="h-2 text-sm " book={bookDetails} />
              </div>
            </div>
          </figure>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
