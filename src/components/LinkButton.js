import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const LinkButton = ({ book, className }) => {
  return (
    <div className={`max-sm:pb-6 pb-5 ${className}`}>
      <a
        className={`flex items-center justify-between text-2xl  bg-black text-white h-14 p-4 rounded-full  ${className}`}
        href={`https://books.google.com.ph/books?id=${book.id}&printsec=frontcover`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read it <AiOutlineArrowRight size={20} />
      </a>
    </div>
  );
};

export default LinkButton;
