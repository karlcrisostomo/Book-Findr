import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext();
export const ResultProvider = ({ children }) => {
  const [searchQuery, setsearchQuery] = useState([]);
  return (
    <SearchContext.Provider value={{ searchQuery, setsearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useProvider = () => {
  return useContext(SearchContext);
};
