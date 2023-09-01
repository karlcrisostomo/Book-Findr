import React from "react";
import GenreComponent from "./GenreComponent";
import { BsArrowUp } from "react-icons/bs";
const CategoryPage = () => {
  const genres = ["Fantasy", "Science Fiction", "Mystery", "Romance"];

  const handleCategoryClick = (genre) => {
    const categoryElement = document.getElementById(genre);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      <div className="  max-sm:px-4 sm:max-w-md  pt-[4em] max-sm:max-w-[25rem]  container mx-auto flex justify-around  xl:max-w-lg font-medium ">
        {genres.map((genre, index) => (
          <span
            key={index}
            className=" cursor-pointer hover:scale-105 transition-all ease-in-out duration-300  hover:bg-gray-300 max-sm:max-w-xs  hover:px-6 hover:font-bold  rounded-xl relative"
            onClick={() => handleCategoryClick(genre)}
          >
            {genre}
          </span>
        ))}
      </div>

      {genres.map((genre, index) => (
        <GenreComponent key={index} genre={genre} />
      ))}

      <div
        className="fixed bottom-20 right-5 bg-white w-[3em] group h-[12em] border-gray-600 border-2 rounded-full cursor-pointer  font-medium hover:bg-gray-200"
        onClick={scrollTop}
      >
        <div  className="mx-auto  flex flex-col h-full items-center mt-4">
          <BsArrowUp size={24} className=" mb-10"/>
          <h1  className="-rotate-90 text-md font-bold text-lg  w-[4em] "> TO TOP</h1>
              
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
