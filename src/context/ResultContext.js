import React, { useState, createContext, useContext, useEffect } from "react";

const SearchContext = createContext();
export const ResultProvider = ({ children }) => {
  const [searchQuery, setsearchQuery] = useState([]);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("searchResults"));
    if (storedResults) {
      setsearchQuery(storedResults); // Initialize searchQuery with stored data
    }
  }, []);

  return (
    <SearchContext.Provider value={{ searchQuery, setsearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useProvider = () => {
  return useContext(SearchContext);
};
