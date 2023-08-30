import React, { useEffect, useState } from "react";
import { SearchBar, Logo } from "./index";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import "animate.css";

const links = [
  { text: "Home", route: "/" },
  { text: "Books", route: "/books" },
  { text: "About", route: "/about" },
];

const Navbar = ({ setMenuOpen }) => {
  const [isMobile, setMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobile((toggle) => !toggle);

    setMenuOpen((menuOpen) => !menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setMobile(false);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    //cleanup function
    return () => window.removeEventListener("resize", handleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Close menu when location changes
    if (isMobile) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <nav className="py-2 border-2 sm:px-4 ">
      <div className="flex justify-between max-sm:px-5 container mx-auto items-center">
        <Logo />
        {isMobile ? (
          <RiCloseLine
            size={32}
            className="sm:hidden cursor-pointer z-50 "
            onClick={toggleMenu}
          />
        ) : (
          <AiOutlineMenu
            size={32}
            className="sm:hidden  ease-in-out cursor-pointer"
            onClick={toggleMenu}
          />
        )}

        <ul
          className={`sm:flex ${
            isMobile
              ? " pt-12 px-11 max-sm:absolute top-0 w-full right-0 bg-white bottom-0 left-0 max-sm:h-screen"
              : "hidden "
          }   `}
        >
          <li className="pr-5">
            <SearchBar />
          </li>
          {links.map((link, index) => (
            <li
              className="pr-4 max-sm:text-3xl max-sm:tracking-wider max-sm:font-medium max-sm:border-b-2 max-sm:pb-2 max-sm:pt-5"
              key={index}
            >
              <div
                className={
                  link.text === "About"
                    ? "hover:after:bg-black hover:after:w-[2em] hover:font-bold sm:hover:after:h-0.5 sm:hover:after:block sm:hover:after:absolute after:transition-all after:duration-500 after:ease-in-out"
                    : ""
                }
              >
                {link.text === "About" ? (
                  <Link
                    to={
                      isMobile && window.location.pathname === "/"
                        ? link.route
                        : "/about"
                    }
                    onClick={(e) => {
                      if (isMobile) {
                        if (window.location.pathname === "/") {
                          toggleMenu();
                        } else {
                          toggleMenu(); // Close the menu when navigating to /about
                          document.getElementById("about").scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      } else if (window.location.pathname === "/") {
                        e.preventDefault();
                        document.getElementById("about").scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <Link
                    to={link.route}
                    onClick={() => {
                      if (isMobile) {
                        toggleMenu();
                      }
                    }}
                    className="hover:after:bg-black hover:after:w-[2em] hover:font-bold sm:hover:after:h-0.5 sm:hover:after:block sm:hover:after:absolute after:transition-all after:duration-300 after:ease-in-out"
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
