import React, { useState } from "react";
import data from "./data";
function User() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  function Next() {
    if (index < data.length - 1) setIndex(index + 1);
  }

  function Prev() {
    if (index > 0) setIndex(index - 1);
  }

  function Random() {
    let randomNumber = Math.floor(Math.random() * data.length);
    setIndex(randomNumber);
  }

  return (
    <div className="review__container">
      <div className="image__container">
        <img className="image" src={image} alt="404" />
      </div>
      <h2 className="name">{name}</h2>
      <h4 className="job">{job.toUpperCase()}</h4>
      <p className="text">{text}</p>
      <div className="arrows__container">
        <button onClick={Prev} className="arrow__left__btn arrow__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="arrow__icon arrow__left__icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button onClick={Next} className="arrow__right__btn arrow__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="arrow__icon arrow__right__icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <button onClick={Random} className="surprise__btn">
        SURPRISE ME
      </button>
    </div>
  );
}

export default User;
