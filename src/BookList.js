import React from "react";
import { useState, useEffect } from "react";
import Url from "./Url.js";
import Book from "./MyBook.jpg";
import "./BookList.css";

const API = Url;
const BookList = () => {
  const [userData, setUserData] = useState(API);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(Math.ceil(API.length / 10));

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const preDisable = currentPage === 1;
  const nextDisable = currentPage === totalPage;

  const itemPerPage = 10;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const itemsToDisplay = userData.slice(startIndex, endIndex);
  return (
    <body>
      <div>
        <div className="gallery">
          {itemsToDisplay && itemsToDisplay.length > 0
            ? itemsToDisplay.map((item, index) => {
                return (
                  <div className="content" >
                    <img src={Book} alt="" className="card-img" />
                    <h3 >{item.title}</h3>
                    <h6 >Author:{item.author}</h6>
                    <p >Language:{item.language}</p>
                    <p >Country{item.country}</p>
                    <p >pages:{item.pages}</p>
                    <a href={item.link} >
                      Click here for Book Details
                    </a>
                    <br />
                  </div>
                );
              })
            : ""}
        </div>

        <div className="button1">
          <button
            onClick={handlePrevClick}
            disable={preDisable}
            className="button2"
          >
            Prev
          </button>
          {Array.from({ length: totalPage }, (_, i) => {
            return (
              <button
                onClick={() => handlePageChange(i + 1)}
                key={i}
                disabled={i + 1 === currentPage}
                className="button2"
              >
                {i + 1}
              </button>
            );
          })}

          <button
            onClick={handleNextClick}
            disable={nextDisable}
            className="button2"
          >
            Next
          </button>
        </div>
      </div>
    </body>
  );
};

export default BookList;
