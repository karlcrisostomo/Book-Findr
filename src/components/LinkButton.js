import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const LinkButton = ({ book, className }) => {
  return (
    <div className={`max-sm:pb-6 pb-5 ${className}`}>
      <a
        className={` group flex items-center border-2 justify-center text-2xl font-medium hover:shadow-xl transition-all ease-in-out duration-300 hover:shadow-white  hover:scale-105 bg-black text-white h-14 p-4 rounded-full ${className}`}
        href={`https://books.google.com.ph/books?id=${book.id}&printsec=frontcover`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Read it</span>
        <AiOutlineArrowRight className=" transition-all ease-in-out duration-300 group-hover:translate-x-7 ml-3" size={20} />
      </a>
    </div>
  );
};

export default LinkButton;
