import React from "react";
import { errorBg } from "../asset";
const Error = ({ className }) => {
  return (
    <div className={`container h-screen max-sm:pt-16  lg:h-full lg:w-[60em]   mx-auto  bg-transparent] ${className}`}>
      <img src={errorBg} alt="404 Error"></img>
    </div>
  );
};

export default Error;
