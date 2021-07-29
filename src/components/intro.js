import React from "react";
import "../styles.css";
import logo from "../images/logo.jpg";

export default function Intro({ showPageTwo, textInput, setTextInput }) {
  const getInput = (value) => {
    setTextInput(value);
  };

  const clickHandler = () => {
    if (textInput) {
      showPageTwo();
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="main" />
      <h1>Are you a fan of mobile legend?</h1>
      <h1>Let's find out</h1>
      <input placeholder="Name" onChange={(e) => getInput(e.target.value)} />
      <button onClick={clickHandler}>Next</button>
    </div>
  );
}
