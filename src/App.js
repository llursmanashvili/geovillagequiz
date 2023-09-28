import React, { useState } from "react";
import "./App.css";



function App() {
  const [showFinalResults, setFinalResults] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  const questions = [
    {
      text: "Where would you be if you were standing on the Spanish Steps? ",
      options: [
        { id: 0, text: "Rome", isCorrect: true},
        { id: 1, text: "Paris", isCorrect: false },
        { id: 2, text: "Milan", isCorrect: false },
        { id: 3, text: "NewYork", isCorrect: false },
      ],
    },
    {
      text: "What year was the United Nations established?",
      options: [
      
        { id: 1, text: "1935", isCorrect: false },
        { id: 2, text: "1940", isCorrect: false },
        { id: 3, text: "1805", isCorrect: false },
        { id: 0, text: "1945", isCorrect: true },
      ], 
    },
    {
      text: "How many minutes are in a full week? ",
      options: [
        { id: 0, text: "10080", isCorrect: true },
        { id: 1, text: "12000", isCorrect: false },
        { id: 2, text: "11500", isCorrect: false },
        { id: 3, text: "10000", isCorrect: false },
      ],
    },
    {
      text: "What sports car company manufactures the 911??",
      options: [
        { id: 0, text: "BMW", isCorrect: false },
        { id: 1, text: "Porsche", isCorrect: true },
        { id: 2, text: "FIAT", isCorrect: false },
        { id: 3, text: "Pagani", isCorrect: false },
      ],
    },
    {
      text: "How many bones do we have in an ear?",
      options: [
        { id: 0, text: "0", isCorrect: false },
        { id: 1, text: "3", isCorrect: true },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
     
    } else {
      setFinalResults(true);
    }
  };
  const restartGame=()=>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(0);
  }


  return (
    <div className="App">
      <h1>QUIZ</h1>
      

      <h2>Your Score: {score}</h2>

      {showFinalResults ? (
        <div className="finalresults">
          <h1>Final Results</h1>
          <h2>{score} correct from-{questions.length} = ({(score/questions.length)*100}%) </h2>
          <button onClick={()=> restartGame()}>RESTART</button>
        </div>
      ) : (
        <div className="questioncard">
          <h2>
            Question {currentQuestion + 1}    
          </h2>
          <h3 className="questiontext">{questions[currentQuestion].text}</h3>
          
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
