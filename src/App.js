import React, { useState } from "react";
import "./styles.css";
import Intro from "./components/intro";
import Greeting from "./components/greeting";
import Quiz from "./components/quiz";

export default function App() {
  const [pageOne, setPageOne] = useState(true);
  const [pageTwo, setPageTwo] = useState(false);
  const [pageThree, setPageThree] = useState(false);
  const [textInput, setTextInput] = useState("");

  const showPageTwo = () => {
    setPageOne(false);
    setPageTwo(true);
    setPageThree(false);
  };

  const showPageThree = () => {
    setPageOne(false);
    setPageTwo(false);
    setPageThree(true);
  };

  return (
    <div className="App">
      {pageOne && (
        <Intro
          showPageTwo={showPageTwo}
          textInput={textInput}
          setTextInput={setTextInput}
        />
      )}
      {pageTwo && (
        <Greeting showPageThree={showPageThree} textInput={textInput} />
      )}
      {pageThree && <Quiz />}
    </div>
  );
}
