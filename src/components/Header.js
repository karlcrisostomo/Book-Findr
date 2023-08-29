import React from "react";
import { headerImage } from "../asset";
const Header = () => {
  return (
    <div className="sm:pt-32 flex container mx-auto flex-col lg:flex-row  px-5 py-28  ">
      <div className=" flex flex-col mx-auto">
        <h1 className=" text-6xl font-bold tracking-wider max-sm:text-[3.5em] py-12 mx-auto max-sm:max-w-xs sm:max-w-sm sm:text-[4em]  md:max-w-md  md:text-[5em] lg:max-w-lg   ">
          Find your Next Book
        </h1>
        <p className=" max-sm:max-w-xs mx-auto lg:max-w-lg  max-sm:p-10 sm:max-w-sm  sm:pb-20  sm:text-xl sm:tracking-wider">
          Dive into a thoughtfully curated collection encompassing an array of
          genres, themes, and narratives, offering something to pique every
          literary palate.
        </p>
      </div>
      <img
        className=" max-sm:translate-y-12 w-full max-sm:objectc  object-center lg:w-[31em] lg:object-contain xl:w-[50em]   "
        src={headerImage}
        alt="img of book"
      ></img>
    </div>
  );
};

export default Header;
