import React from "react";
import { Link } from "react-router-dom";
import { brandName } from "../asset";


const Logo = ({className}) => {
  return (
    <Link to="/">
     <img src={ brandName} className=" max-sm:w-[10em]  w-[15em] hover:scale-95 transition-all duration-500   " alt="Logo"/>
    </Link>
  );
};

export default Logo;
