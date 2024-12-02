import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

function Userbooklist() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user-allbooklisting"
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="booklist-container">
      <h1 className="page-title">Our Book Collection</h1>
      {books.map((book) => (
        <div key={book._id} className="book-row">
          <img
            src={`http://localhost:8000/upload/${book.img}`}
            alt={book.Book_Name}
            className="book-image-structured"
          />
          <div className="book-info-structured">
            <h2>{book.Book_Name}</h2>
            <p><strong>Author:</strong> {book.Author_Name}</p>
            <p><strong>Genre:</strong> {book.Genres}</p>
            <p><strong>Price:</strong> ₹{book.Amount}</p>
            <p><strong>Contact:</strong> {book.contact}</p>
          </div>
          <button className="request-button-structured">Request Book</button>
        </div>
      ))}
    </div>
  );
}

export default Userbooklist;
