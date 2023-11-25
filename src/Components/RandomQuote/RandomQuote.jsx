import React, { useState } from "react";
import "./RandomQuote.css";
import reload_icon from "../Assets/reload.png";

// RandomQuote component
const RandomQuote = () => {
  // Array of locally defined quotes
  const localQuotes = [
    {
      text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "Christian D. Larson",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston S. Churchill",
    },
    {
      text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
      author: "Steve Jobs",
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    // Add more quotes as needed
  ];

  // State to hold the currently displayed quote
  const [quote, setQuote] = useState(localQuotes[0]);

  // Function to select a random quote and update the state
  const random = () => {
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    const selectedQuote = localQuotes[randomIndex];
    setQuote(selectedQuote);
  };

  // Render the component
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          {/* Displaying the author, removing any extra information after the comma */}
          <div className="author">{quote.author.split(",")[0]}</div>
          <div className="icons">
            {/* Reload icon to get a new random quote */}
            <img src={reload_icon} onClick={random} alt="Reload" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
