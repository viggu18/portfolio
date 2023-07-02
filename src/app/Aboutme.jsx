import React from "react";
import DevImage from "../assets/fullstack.png";

const Aboutme = () => {
  return (
    <div>
      <h1 className="text-xl my-1">About Me</h1>
      <div className="xl:flex lg:flex md:flex justify-evenly gap-5 sm:grid">
        <div className="p-5 flex items-center lg:w-1/2 sm:w-full">
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-md xs:text-sm">
            I bring designs to life with precision and creativity. With
            expertise in cutting edge technologies, I strive to craft intuitive
            and seamless user interfaces that enhance digital interactions.
          </p>
        </div>
        <div className="p-5 flex items-center justify-center lg:w-1/2 sm:w-full">
          <img
            src={DevImage}
            alt="developer"
            className="xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-[80%] xs:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
