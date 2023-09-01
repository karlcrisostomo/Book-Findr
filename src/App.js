import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BookDetail, BookList, ErrorPage, Navbar } from "./components";
import { ResultProvider } from "./context/ResultContext";
import { About, CategoryPage, Home } from "./Pages";

const App = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F5F5F7] ">
    <Router>
        <ResultProvider>
          <Navbar setMenuOpen={setMenuOpen} />

          <div className={MenuOpen ? " hidden" : "block"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<CategoryPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/book-list" element={<BookList />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </div>
        </ResultProvider>
      </Router>
    </div>
  );
};

export default App;
