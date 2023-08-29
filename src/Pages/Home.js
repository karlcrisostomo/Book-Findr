import React from "react";
import { Hero, Header, HighRated } from "../components";
import About from "./About";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HighRated />
 
      <div id="about"><About/></div>
    </div>
  );
};

export default Home;
