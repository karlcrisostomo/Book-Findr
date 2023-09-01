import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../api/books";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavButtons from "./NavButtons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HighRated = () => {
  const [cachedFiction, setCachedFiction] = useState([]);

  useEffect(() => {
    const getCachedData = () => {
      const cachedData = JSON.parse(localStorage.getItem("cachedFiction"));
      if (cachedData) {
        setCachedFiction(cachedData);
      } else {
        fetchAndCacheData();
      }
    };

    const fetchAndCacheData = async () => {
      try {
        const fetchedData = await fetchBooks("Top 10 Books");
        setCachedFiction(fetchedData);
        localStorage.setItem("cachedFiction", JSON.stringify(fetchedData));
      } catch (error) {
        console.error(error);
      }
    };

    getCachedData();

    fetchAndCacheData();
  }, []);

  return (
    <div className="container max-md:mb-12 md:p-6 z-0 max-sm:max-w-sm mx-auto max-sm:p-4 sm:px-10  ">
      <h1 className=" font-Martian mt-20  after:block max-sm:text-xl sm:text-4xl pb-24 font-bold">
        Top 10 Books
      </h1>
      <Swiper
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 50,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 24,
            slidesPerView: 3,
          },
        }}
        loop={true}
        onSwiper={(swiper) => swiper}
        pagination={{ clickable: true }}
      >
        <style>
          {`
        
          .swiper-pagination-bullet-active {
           
            background-color: black;
          }
        `}
        </style>
        {cachedFiction.map((book, idx) => (
          <SwiperSlide className="xl:py-14 " key={idx}>
            <a
              href={`https://books.google.com.ph/books?id=${book.id}&source=gbs_navlinks_s`}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <div className="cursor-pointer lg:max-w-lg mx-auto  rounded-xl max-xl:bg-inherit  hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-xl xl:flex p-4 gap-5   ">
                <img
                  className=" max-sm:w-[17em] sm:w-[15rem] sm:h-[20rem] rounded-xl border-gray border-[1px]  max-sm:h-96   xl:h-[16rem] xl:w-[12rem] xl:-translate-y-16    mx-auto aspect-square"
                  src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w256-h256`}
                  alt={book.volumeInfo.title}
                />
                <div className=" pt-7 max-sm:px-8 aspect-square max-sm:h-[18em]  mx-auto md:px-10  xl:px-0  sm:pt-6    ">
                  <h1 className=" font-bold tracking-wider ">
                    {book.volumeInfo.title}
                  </h1>
                  <h1>
                    Authors:
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors
                      : "Unknown"}
                  </h1>
                  <h1 className=" ">
                    Publisher:
                    {book.volumeInfo.publisher
                      ? book.volumeInfo.publisher
                      : " Unknown"}
                  </h1>
                  <h1>Published: {book.volumeInfo.publishedDate}</h1>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}

        <NavButtons />
      </Swiper>
    </div>
  );
};
export default HighRated;
