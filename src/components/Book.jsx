import React from "react";

const Book = ({ title, description, publisher, author, imagePath }) => {
  return (
    <>
      <div className="flex justify-center w-full lg:w-1/2 2xl:w-1/3">
        <div className="flex flex-row w-112 h-80 my-6 shadow-lg shadow-gray-500">
          <div className="w-48">
            <img
              src={`http://localhost:8000/${imagePath}`}
              alt="Book"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-64 py-10 px-4">
            <div className="text-lg font-bold">{title}</div>
            <div className="mb-6 text-slate-500 text-sm">{description}</div>
            <div className="text-sm font-bold">{author}</div>
            <div className="text-slate-500 text-sm">{publisher}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
