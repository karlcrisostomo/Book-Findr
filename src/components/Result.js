import React from "react";
import { resultBg } from "../asset";
const Result = ({ props }) => {
  return (
    <div className="  container mx-auto">
      <h1 className="  text-xl sm:text-2xl pb-6 lg:text-4xl font-Martian  font-medium tracking-wider text-center pt-20">No results found...</h1>
      <img className=" w-full h-screen lg:w-3/4 object-contain  mx-auto " src={resultBg} alt="No Result"></img>
    </div>
  );
};

export default Result;
