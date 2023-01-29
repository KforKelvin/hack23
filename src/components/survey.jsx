import { useState } from "react";
import React from "react";
import Button from '@mui/material/Button';


export const Survey = (props) => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = [
    {
      question: "What is your budget on Grocery this month?",
      options: [
        100,
        200,
        300,
        400
      ]
    },
    {
      question: "What is your budget on Gas this month?",
      options: [
        100,
        200,
        300,
        400,
      ]
    },
    {
      question: "What is your budget on Online Retail this month?",
      options: [
        100,
        200,
        300,
        400,
      ]
    },
    {
      question: "What is your budget on Dining this month?",
      options: [
        100,
        200,
        300,
        400,
      ]
    },
    {
      question: "What is your budget on Others this month?",
      options: [
        100,
        200,
        300,
        400,
      ]
    }
  ];

  function handleAnswerSelection(selectedOption) {
    setUserAnswers([...userAnswers, selectedOption]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
  
  function getRecommendedCard() {
    const grocery_spending = userAnswers[0];
    const gas_spending = userAnswers[1];
    const retail_spending = userAnswers[2];
    const dining_spending = userAnswers[3];
    const others_spending = userAnswers[4];

    let benefitsArr = new Array(props.data[0].length)

    for (let i = 0; i < props.data[0].length; i++) {
      let {offer, fee, grocery, gas, online, dining, other} = props.data[0][i];
      console.log(offer, fee, grocery, gas, online, dining, other)
      let benefit = offer - fee + grocery_spending * grocery * 0.01 + gas_spending * gas * 0.01 + retail_spending * online * 0.01 + dining_spending * dining * 0.01 + others_spending * other * 0.01;
      benefitsArr[i] = benefit;
    }

    console.log(benefitsArr);

    let max_benefit_idx = benefitsArr.indexOf(Math.max(...benefitsArr));
    console.log(max_benefit_idx)

    return props.data[0][max_benefit_idx].name; 

  }
  
  function renderResult() {
    return (
      <div>
        <h2>Recommended Card: { getRecommendedCard()}</h2>
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
