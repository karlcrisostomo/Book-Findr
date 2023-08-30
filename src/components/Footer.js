import React from "react";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" py-8 px-5 ">
      <div className=" container mx-auto flex sm:justify-between sm:items-center md:px-4 max-sm:flex-col text-sm pt-6 sm:flex-row h-[5em] ">
        <h1 className=" flex items-center">
          © {currentYear} - Book Findr
          <span className=" ml-3 animate-ping bg-black w-2 h-2 block rounded-full"></span>
        </h1>
        <h1 className="flex items-center">
          Design and Coded by <span className=" ml-1 font-medium">Karl_Crisostomo</span>
          <a
            href="https://github.com/karlcrisostomo/book-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo
              className="cursor-pointer   hover:scale-110 duration-300 ml-2"
              size={24}
            />
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
