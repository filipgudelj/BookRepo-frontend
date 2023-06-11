import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/books`, {
        headers: {
          Authorization: "JWT " + localStorage.getItem("token"),
        },
      })
      .then((response) => setBooks(response.data));
  }, []);

  const reversedBooks = books.slice().reverse();
  return (
    <>
      <div className="flex flex-wrap pt-8">
        {Array.isArray(books) && books.length > 0 ? (
          reversedBooks.map((book) => (
            <Book
              key={book._id}
              title={book.title}
              description={book.description}
              publisher={book.publisher}
              author={book.author}
              imagePath={book.bookImage}
            />
          ))
        ) : (
          <div className="flex justify-center w-full font-bold">
            Loading books...
          </div>
        )}
      </div>
    </>
  );
};

export default Books;
