import React from "react";
import { Hero, Header, HighRated, Footer, ErrorPage } from "../components";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HighRated />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
