import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [jokes, setJokes] = useState([]);
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + jokes.length - 1) % jokes.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % jokes.length);
  };
  useEffect(() => {
    console.log("getting jokes");

    axios
      .get("https://v2.jokeapi.dev/joke/Any?amount=5&type=single")
      .then((res) => setJokes(res.data.jokes))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log("jokes", jokes);
  //   console.log("currentIndex", currentIndex);
  //   if (jokes.length > 0) {
  //     const temp = jokes[currentIndex % jokes.length];
  //     console.log("current", temp);
  //   }
  // }, [jokes, currentIndex]);
  if (jokes.length === 0) return <div>Loading jokes...</div>;

  const currentJoke = jokes[currentIndex % jokes.length];
  return (
    <div className="display-testimonials">
      <section className="jokes">Joke: {currentJoke.joke}</section>
      <section className="category">Category: {currentJoke.category}</section>
      <section className="buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </section>
    </div>
  );
};

export default Testimonials;
