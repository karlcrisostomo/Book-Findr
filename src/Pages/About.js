import React from "react";
import { aboutBg } from "../asset";
const About = () => {
  return (
    <div className=" p-6 pt-12 sm:pt-20 ">
      <section className=" container mx-auto">
        <div className=" flex flex-col md:flex-row md:max-w-4xl lg:max-w-6xl xl:max-w-none gap-2  mx-auto  max-sm:max-w-sm sm:max-w-sm">
          <div className="max-md:order-last md:order-2 mx-auto">
            <img
              className=" lg:object-contain   mx-auto  object-contain "
              src={aboutBg}
              alt="About Img"
            />
          </div>
          <div>
            <div className=" flex-none xl:w-[50em] md:order-1 tracking-wider   ">
              <sub className=" italic after:w-[6em]  after:h-0.5 after:bg-gray-400 after:block font-medium text-base lg:text-lg  ">
                Uncover Our Book Findr Project
              </sub>
              <header className=" mt-2 font-Martian text-4xl font-bold lg:text-6xl   ">
                Behind the Pages
              </header>
              <p className="  xl:max-w-xl  p-6 text-justify text-lg mt-12 bg-white/60 rounded-lg backdrop-blur-sm">
                <span className=" font-medium lg:text-xl  ">
                  Welcome to the backstage of Book Findr
                </span>
                , our passion project born from a love for reading. Join us as
                we share the journey of creating a platform to explore, connect,
                and celebrate books of all genres.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
