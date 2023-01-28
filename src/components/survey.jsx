import { useState } from "react";
import React from "react";
import Button from '@mui/material/Button';


export const Survey = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = [
    {
      question: "What is your budget on Grocery this month",
      options: [
        100,
        200,
        300,
        400
      ]
    },
    {
      question: "What is your credit score?",
      options: [
        "Excellent (750+)",
        "Good (700-749)",
        "Fair (650-699)"
      ]
    },
    {
      question: "What is your annual income?",
      options: [
        "$50,000 or less",
        "$50,001 to $100,000",
        "$100,001 or more"
      ]
    }
  ];

  function handleAnswerSelection(selectedOption) {
    setUserAnswers([...userAnswers, selectedOption]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const recommendedCards = {
    "Cash back": "Discover it Cash Back",
    "Travel": "Chase Sapphire Preferred",
    "Retail": "Capital One Venture"
  };
  
  function getRecommendedCard() {
    let card = "";
    console.log(userAnswers)
    return recommendedCards[userAnswers[0]];
  }
  
  function renderResult() {
    return (
      <div>
        <h2>Recommended Card:</h2>
        <p>{getRecommendedCard()}</p>
      </div>
    );
  }
  

  return (
    <div>
      {currentQuestionIndex === questions.length ? renderResult() :
        <>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerSelection(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
  
};
