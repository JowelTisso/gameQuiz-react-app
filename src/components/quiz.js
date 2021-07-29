import React, { useState } from "react";
import "../styles.css";
import logo from "../images/logo.jpg";
import { questions } from "../data";

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(questions[0]);
  const [score, setScore] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [endMsg, setEndMsg] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const clickHandler = (ans) => {
    if (ans === activeQuestion.answer) {
      setScore(score + 1);
    }
    gotoNext();
  };

  const gotoNext = () => {
    if (questionIndex < 5) {
      setQuestionIndex(questionIndex + 1);
      setActiveQuestion(questions[questionIndex + 1]);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    switch (score) {
      case 0:
        setEndMsg("You don't know about Mobile Legend!");
        break;
      case 1:
        setEndMsg("You rarely play Mobile Legend!");
        break;
      case 2:
        setEndMsg("You rarely play Mobile Legend!");
        break;
      case 3:
        setEndMsg("You play Mobile Legend often!");
        break;
      case 4:
        setEndMsg("You are a true Mobile Legend Player!");
        break;
      default:
        setEndMsg("");
    }
    setIsEnd(true);
  };

  const replay = () => {
    setScore(0);
    setQuestionIndex(0);
    setActiveQuestion(questions[0]);
    setIsEnd(false);
    setIsFinished(false);
  };

  const finish = () => {
    setIsFinished(true);
  };

  return (
    <div className="App">
      <img src={logo} alt="main" style={{ width: "30%" }} />
      <div className="container-nav">
        <button>Score:{score}</button>
      </div>
      {!isEnd && (
        <div className="container-question">
          <h2 className="question-text">{activeQuestion.question}</h2>
          <ol>
            {activeQuestion.option.map((opt) => (
              <li key={opt} className="option-text">
                {opt}
              </li>
            ))}
          </ol>
        </div>
      )}
      {isEnd && (
        <div className="container-question">
          <h1 className="question-text">End Game</h1>
          <h2 className="question-text">You Scored</h2>
          <h2 className="question-text">{score}</h2>
          <h2 className="question-text">{endMsg}</h2>
        </div>
      )}
      {!isEnd && (
        <div className="container-ans">
          <button
            className="btn-ans"
            onClick={() => {
              clickHandler(activeQuestion.option[0]);
            }}
          >
            1
          </button>
          <button
            className="btn-ans"
            onClick={() => {
              clickHandler(activeQuestion.option[1]);
            }}
          >
            2
          </button>
          <button
            className="btn-ans"
            onClick={() => {
              clickHandler(activeQuestion.option[2]);
            }}
          >
            3
          </button>
        </div>
      )}

      {isEnd && !isFinished && (
        <>
          <h3 className="question-text">Do you want to play again?</h3>
          <div className="container-ans">
            <button
              className="btn-ans"
              onClick={() => {
                replay();
              }}
            >
              Yes
            </button>
            <button
              className="btn-ans"
              onClick={() => {
                finish();
              }}
            >
              No
            </button>
          </div>
        </>
      )}

      {isFinished && <h3 className="question-text">Thank you for playing!</h3>}
    </div>
  );
}
