import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InvalidLogin from "./InvalidLogin";

const NewBook = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const [error, setError] = useState({
    title: "",
    description: "",
    publisher: "",
    author: "",
    bookImage: null,
  });

  const [newBookData, setNewBookData] = useState({
    title: "",
    description: "",
    publisher: "",
    author: "",
    bookImage: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBookData((prevData) => {
      return { ...prevData, [name]: value };
    });
    if (name === "title") {
      setError((prevData) => {
        return { ...prevData, title: "" };
      });
    } else if (name === "description") {
      setError((prevData) => {
        return { ...prevData, description: "" };
      });
    } else if (name === "publisher") {
      setError((prevData) => {
        return { ...prevData, publisher: "" };
      });
    } else if (name === "author") {
      setError((prevData) => {
        return { ...prevData, author: "" };
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(event.target.files[0]);
    setNewBookData((prevData) => {
      return { ...prevData, bookImage: file };
    });
    if (file) {
      setError((prevData) => {
        return { ...prevData, bookImage: "" };
      });
    }
  };

  const handleNewBook = () => {
    const formData = new FormData();

    formData.append("title", newBookData.title);
    formData.append("description", newBookData.description);
    formData.append("publisher", newBookData.publisher);
    formData.append("author", newBookData.author);
    formData.append("bookImage", newBookData.bookImage);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/create-book`, formData, {
        headers: {
          Authorization: "JWT " + localStorage.getItem("token"),
        },
      })
      .then(navigate("/home"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBookData.title.trim() === "") {
      setError((prevData) => {
        return { ...prevData, title: "Title is required" };
      });
    }
    if (newBookData.description.trim() === "") {
      setError((prevData) => {
        return { ...prevData, description: "Description is required" };
      });
    }
    if (newBookData.publisher.trim() === "") {
      setError((prevData) => {
        return { ...prevData, publisher: "Publisher is required" };
      });
    }
    if (newBookData.author.trim() === "") {
      setError((prevData) => {
        return { ...prevData, author: "Author is required" };
      });
    }
    if (newBookData.bookImage === null) {
      setError((prevData) => {
        return { ...prevData, bookImage: "Image is required" };
      });
    }
    if (
      newBookData.title.trim() !== "" &&
      newBookData.description.trim() !== "" &&
      newBookData.publisher.trim() !== "" &&
      newBookData.author.trim() !== "" &&
      newBookData.bookImage !== null
    ) {
      handleNewBook();
    }
  };

  const { title, description, publisher, author } = newBookData;

  return (
    <>
      {localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined" ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <form
            onSubmit={handleSubmit}
            className="absolute flex flex-row h-136 shadow-slate-400 shadow-lg rounded-xl"
          >
            <div className="relative flex flex-col w-80 h-136 p-8">
              <h1 className="mb-3 text-2xl font-bold">Create Book</h1>
              <p className="mb-7 text-gray-500 text-xs">
                {" "}
                Thank you for choosing to create a new book! Please fill out the
                following details:
              </p>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md text-gray-500"
                value={title}
                onChange={handleChange}
              />
              <div className="flex items-center h-6 text-red-500 text-xs">
                {error.title ? error.title : ""}
              </div>
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md resize-none overflow-hidden text-gray-500"
                value={description}
                onChange={handleChange}
              />
              <div className="flex items-center h-6 text-red-500 text-xs">
                {error.description ? error.description : ""}
              </div>
              <input
                type="text"
                name="publisher"
                id="publisher"
                placeholder="Publisher"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md text-gray-500"
                value={publisher}
                onChange={handleChange}
              />
              <div className="flex items-center h-6 text-red-500 text-xs">
                {error.publisher ? error.publisher : ""}
              </div>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Author"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md text-gray-500"
                value={author}
                onChange={handleChange}
              />
              <div className="flex items-center h-6 text-red-500 text-xs">
                {error.author ? error.author : ""}
              </div>
              <div className="relative inline-block overflow-hidden">
                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                  htmlFor="file-input"
                  className="flex justify-center mb-2 p-2 shadow-slate-400 shadow-md border-none rounded-lg cursor-pointer text-gray-400"
                >
                  {selectedFile ? selectedFile.name : "No file chosen"}
                </label>
              </div>
              <div className="flex items-start h-6 text-red-500 text-xs">
                {error.bookImage ? error.bookImage : ""}
              </div>
              <button
                type="submit"
                className="p-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 duration-300"
              >
                Submit
              </button>
            </div>
            <div className="w-80 h-136 hidden md:block">
              <div
                alt="New Book"
                className="w-full h-full rounded-r-xl bg-form-pattern"
              ></div>
            </div>
          </form>
        </div>
      ) : (
        <InvalidLogin />
      )}
    </>
  );
};

export default NewBook;
