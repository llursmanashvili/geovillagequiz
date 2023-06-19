import React, { useState } from "react";
import "./App.css";



function App() {
  const [showFinalResults, setFinalResults] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  const questions = [
    {
      text: "ჩამოთვლილთაგან რომელია დედამიწის შუაგული? ",
      options: [
        { id: 0, text: "დაბა ხარაგული", isCorrect: true},
        { id: 1, text: "დაუდგენელია", isCorrect: false },
        { id: 2, text: "სამხრეთ აფრიკასთან ახლოს", isCorrect: false },
        { id: 3, text: "სამტრედია", isCorrect: false },
      ],
    },
    {
      text: "რომელი წინსართი გამოიყენება ხარაგაულში მისასალმებლად?",
      options: [
      
        { id: 1, text: "ვაა", isCorrect: false },
        { id: 2, text: "ჰოო", isCorrect: false },
        { id: 3, text: "ეეე", isCorrect: false },
        { id: 0, text: "ოოოოოოოო", isCorrect: true },
      ], 
    },
    {
      text: "რა ეწოდებოდა ხარაგაულს 1949 წლიდან 1976 წლამდე? ",
      options: [
        { id: 0, text: "დაბა ორჯონიკიძე", isCorrect: true },
        { id: 1, text: "ხოროგოული", isCorrect: false },
        { id: 2, text: "დევის ხვრელი", isCorrect: false },
        { id: 3, text: "ჯაფარაული", isCorrect: false },
      ],
    },
    {
      text: "რომელია ყველაზე გამორჩეული სოფელი ხარაგაულში?",
      options: [
        { id: 0, text: "ჩხერი", isCorrect: false },
        { id: 1, text: "თეთრაწყარო", isCorrect: true },
        { id: 2, text: "ხიდარი", isCorrect: false },
        { id: 3, text: "არცერთი", isCorrect: false },
      ],
    },
    {
      text: "სად მოედინება ყველაზე კარგი წყალი?",
      options: [
        { id: 0, text: "სანფრანცისკო", isCorrect: false },
        { id: 1, text: "წყალკანალი", isCorrect: true },
        { id: 2, text: "ბორჯომი", isCorrect: false },
        { id: 3, text: "ერევანი", isCorrect: false },
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
      

      <h2>შენი ქულა: {score}</h2>

      {showFinalResults ? (
        <div className="finalresults">
          <h1>საბოლოო შედეგები</h1>
          <h2>{score} სწორი პასუხი {questions.length}-დან = ({(score/questions.length)*100}%) </h2>
          <h3>#ჩვენიხარაგული</h3>
          <button onClick={()=> restartGame()}>RESTART</button>
        </div>
      ) : (
        <div className="questioncard">
          <h2>
            კითხვა {currentQuestion + 1}    
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
