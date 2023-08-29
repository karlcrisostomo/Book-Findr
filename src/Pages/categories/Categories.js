import React from "react";
import CategoryComponent from "./CategoryComponent";


const Categories = () => {
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
        <CategoryComponent key={index} genre={genre} />
      ))}

      <div
        className="fixed bottom-5 right-5 bg-gray-300 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-400"
        onClick={scrollTop}
      >
        Scroll to Top
      </div>
    </div>
  );
};

export default Categories;
