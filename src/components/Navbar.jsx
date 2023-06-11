import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/sign-out`,
        {},
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
      });
  };

  const handleNavigate = () => {
    navigate("/create-book");
  };

  return (
    <>
      <nav className="flex flex-row  justify-between items-center h-12 px-6 bg-cyan-600 text-sm md:text-base">
        <div className="flex flex-row">
          <div className="ml-1 text-white hover:text-black duration-300 cursor-pointer">
            BookRepo
          </div>
        </div>
        <div className="flex flex-row">
          <div className="mx-1 text-white hover:text-black duration-300 cursor-pointer md:mx-2">
            Home
          </div>
          <div className="mx-1 text-white hover:text-black duration-300 cursor-pointer md:mx-2">
            About
          </div>
          <div className="mx-1 text-white hover:text-black duration-300 cursor-pointer md:mx-2">
            Contact
          </div>
        </div>
        <div>
          <button
            onClick={handleNavigate}
            className="mr-2 p-1 rounded-lg text-white hover:text-black duration-300 md:mr-4"
          >
            Create Book
          </button>
          <button
            onClick={handleLogout}
            className="mr-2 p-1 text-white hover:text-black duration-300 md:mr-4"
          >
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
