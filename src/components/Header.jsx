import React from "react";
import HeaderBg from "../svgs/HeaderBg.svg";

const Header = () => {
  return (
    <>
      <div className="flex flex-row pt-8 pb-6 px-6 bg-cyan-600 lg:pt-16">
        <div className="w-7/12 md:w-4/6 lg:w-3/4">
          <h1 className="mb-3 text-white text-lg font-bold md:text-xl lg:text-2xl lg:mb-6">
            Hello, <span>{localStorage.getItem("username")}</span>
          </h1>
          <h2 className="pb-2 pr-16 text-white text-xs md:text-sm lg:text-base">
            Welcome to BookRepo, where the magic of books comes alive. Immerse
            yourself in a boundless universe of captivating stories, from
            timeless classics to thrilling new releases. Join our community of
            passionate readers, explore the endless possibilities, and let the
            pages of BookRepo guide you on an unforgettable journey through the
            written word."
          </h2>
        </div>
        <div className="w-5/12 md:w-2/6 lg:w-1/4">
          <img src={HeaderBg} alt="Header" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default Header;
