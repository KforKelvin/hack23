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

  // const recommendedCards = {
  //   "Cash back": "Discover it Cash Back",
  //   "Travel": "Chase Sapphire Preferred",
  //   "Retail": "Capital One Venture"
  // };
  
  function getRecommendedCard() {
    const grocery_spending = userAnswers[0];
    const gas_spending = userAnswers[1];
    const retail_spending = userAnswers[2];
    const dining_spending = userAnswers[3];
    const others_spending = userAnswers[4];
    
    //1. BCE saving 
    const BCE_saving = 0.03 * grocery_spending + 0.03 * gas_spending + 0.03 * retail_spending + 0.01 * dining_spending + 0.01 * others_spending;

    //2. BCP saving
    const BCP_saving = 0.06 * grocery_spending + 0.03 * gas_spending + 0.03 * retail_spending + 0.01 * dining_spending + 0.01 * others_spending;

    //3. Schwab Investor Card
    const Schwab_saving = 0.015 * grocery_spending + 0.015 * gas_spending + 0.015 * retail_spending + 0.015 * dining_spending + 0.015 * others_spending;

    //4. Amazon Prime Credit Card
    const amazon_saving = 0.02 * grocery_spending + 0.02 * gas_spending + 0.05 * retail_spending + 0.01 * dining_spending + 0.01 * others_spending;

    //5. Freedom Flex (CFF)
    const CFF_saving = 0.03 * grocery_spending + 0.01 * gas_spending + 0.01 * retail_spending + 0.03 * dining_spending + 0.01 * others_spending;

    //6. Freedom Unlimited (CFU)
    const CFU_saving = 0.03 * grocery_spending + 0.03 * gas_spending + 0.015 * retail_spending + 0.03 * dining_spending + 0.015 * others_spending;

    //7. Instacart Credit Card
    const instacart_saving = 0.02 * grocery_spending + 0.02 * gas_spending + 0.05 * retail_spending + 0.02 * dining_spending + 0.01 * others_spending;

    //8. Costco Anywhere Visa Card
    const costco_saving = 0.01 * grocery_spending + 0.04 * gas_spending + 0.02 * retail_spending + 0.03 * dining_spending + 0.01 * others_spending;

    //9. Bank of America Customized Cash Rewards Credit Card
    const boa_saving = 0.03 * grocery_spending + 0.03 * gas_spending + 0.03 * retail_spending + 0.03 * dining_spending + 0.01 * others_spending;

    //10. Bank of America Unlimited Cash Rewards Credit Card
    const boa_unlimited_saving = 0.015 * grocery_spending + 0.015 * gas_spending + 0.015 * retail_spending + 0.015 * dining_spending + 0.015 * others_spending;

    //11. Capital One QuixksilverOne Cash Rewards Credit Card
    const capital_one_QuixksilverOne_saving = 0.015 * grocery_spending + 0.015 * gas_spending + 0.015 * retail_spending + 0.015 * dining_spending + 0.015 * others_spending;

    //12. Capital One Quixksilver Cash Rewards Credit Card
    const capital_one_Quixksilver_saving = 0.015 * grocery_spending + 0.015 * gas_spending + 0.015 * retail_spending + 0.015 * dining_spending + 0.015 * others_spending;

    //13. Capital One SavorOne Cash Rewards Credit Card
    const capital_one_savorOne_saving = 0.03 * grocery_spending + 0.01 * gas_spending + 0.03 * retail_spending + 0.03 * dining_spending + 0.01 * others_spending;

    //14. Capital One Savor Cash Rewards Credit Card
    const capital_one_savor_saving = 0.03 * grocery_spending + 0.01 * gas_spending + 0.01 * retail_spending + 0.04 * dining_spending + 0.01 * others_spending;

    //15. Wells Fargo Active Cash Card
    const wells_fargo_saving = 0.02 * grocery_spending + 0.02 * gas_spending + 0.02 * retail_spending + 0.02 * dining_spending + 0.02 * others_spending;

    const maxReturn = Math.max(BCE_saving, BCP_saving, Schwab_saving, amazon_saving, CFF_saving, CFU_saving, instacart_saving, costco_saving, boa_saving, boa_unlimited_saving, capital_one_QuixksilverOne_saving, capital_one_Quixksilver_saving, capital_one_savorOne_saving, capital_one_savor_saving, wells_fargo_saving)
    if(BCE_saving === maxReturn) {
      return 'BCE_saving'
    }
    else if(BCP_saving === maxReturn) {
      return 'BCP_saving'
    }
    else if(Schwab_saving === maxReturn) {
      return 'Schwab_saving'
    }
    else if(amazon_saving === maxReturn) {
      return 'amazon_saving'
    }
    else if(CFF_saving === maxReturn) {
      return 'CFF_saving'
    }
    else if(CFU_saving === maxReturn) {
      return 'CFU_saving'
    }
    else if(instacart_saving === maxReturn) {
      return 'instacart_saving'
    }
    else if(costco_saving === maxReturn) {
      return 'costco_saving'
    }
    else if(boa_saving === maxReturn) {
      return 'boa_saving'
    }
    else if(boa_unlimited_saving === maxReturn) {
      return 'boa_unlimited_saving'
    }
    else if(capital_one_QuixksilverOne_saving === maxReturn) {
      return 'capital_one_QuixksilverOne_saving'
    }
    else if(capital_one_Quixksilver_saving === maxReturn) {
      return 'capital_one_Quixksilver_saving'
    }
    else if(capital_one_savorOne_saving === maxReturn) {
      return 'capital_one_savor_saving'
    }
    else if(capital_one_savor_saving === maxReturn) {
      return 'capital_one_savor_saving'
    }
    else if(wells_fargo_saving === maxReturn) {
      return 'wells_fargo_saving'
    }
    

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
