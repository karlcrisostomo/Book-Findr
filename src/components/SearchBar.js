import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useProvider } from "../context/ResultContext";
import { fetchBooks } from "../api/books";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { setsearchQuery } = useProvider();
  const [searchResult, setSearchResult] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false); // Track search input visibility
  const navigate = useNavigate();
  const searchResultsRef = useRef(null);

  const handleSearchChange = async (text) => {
    setSearchText(text);
    if (text === "") {
      setSearchResult([]); // Clear search results when input is empty
      setsearchQuery([]);
      return;
    }
    const searchResults = await fetchBooks(text);
    setsearchQuery(searchResults); // Update the searchQuery in context
    setSearchResult(searchResults);

    localStorage.setItem("searchResults", JSON.stringify(searchResults));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchChange(searchText);
      navigate("/book-list");
      setSearchVisible(false);
    }
  };

  const handleClickOutside = (e) => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(e.target)
    ) {
      setSearchVisible(false); // Hide search input and results when clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("searchResults"));
    if (storedResults) {
      setSearchResult(storedResults);
      setsearchQuery(storedResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchResultClick = () => {
    setSearchVisible(false); // Hide search input and results on search result click
  };

  return (
    <div className="">
      <div className=" ">
        <AiOutlineSearch
          size={window.innerWidth < 640 ? 30 : 24}
          className="cursor-pointer"
          onClick={() => {
            setSearchVisible(!searchVisible); // Toggle search input visibility
          }}
        />

        {searchVisible && ( // Render search input and results only when visible
          <div
            className="px-4 sm:absolute z-50  max-sm:bg-transparent bg-[#F5F5F7] sm:rounded-b-2xl border-gray-300 border-b-2  w-full  left-0  pt-5  py-4 "
            ref={searchResultsRef} // Ref to the search results div
          >
            <div className=" flex px-2 py-2 max-sm:max-w-md sm:max-w-lg xl:max-w-3xl mx-auto items-center bg-white rounded-md  ">
              <AiOutlineSearch
                size={24}
                color=" gray"
                className="cursor-pointer"
                onClick={() => {
                  setSearchVisible(false);
                  handleSearchChange(searchText);
                  navigate("/book-list");
                }}
              />
              <input
                className="  w-full pl-2 outline-none border-none bg-transparent"
                placeholder="Search book here..."
                type="text"
                value={searchText}
                onChange={(e) => handleSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {searchText.length > 0 && (
                <RxCross2
                  size={20}
                  className="cursor-pointer relative -left-6"
                  onClick={() => {
                    setSearchText(""); // Clear the input when the cross is clicked
                  }}
                />
              )}
            </div>

            <div className=" max-sm:max-w-sm sm:max-w-md  mx-auto  lg:max-w-xl xl:max-w-3xl  ">
              {searchText.length === 0 ? (
                <p className="text-center text-gray-500 mt-4">
                  No search yet...
                </p>
              ) : searchResult.length === 0 ? (
                <p className="text-center text-gray-500 mt-4">
                  Result not found
                </p>
              ) : (
                searchResult.map((book) => (
                  <div
                    className=" p-6     "
                    key={book.id}
                    onClick={handleSearchResultClick} // Call function to hide on click
                  >
                    <Link className="flex p-2" to={`/book/${book.id}`}>
                      <img
                        className="aspect-square object-contain w-10 mr-6"
                        src={
                          book.volumeInfo.imageLinks?.smallThumbnail || "null"
                        }
                        alt="Thumbnail"
                      />
                      <h2>{book.volumeInfo.title}</h2>
                    </Link>
                    <span className="w-full h-0.5 block bg-gray-400"></span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
