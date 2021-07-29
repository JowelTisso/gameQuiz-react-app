import React, { useState } from "react";
import "../styles.css";
import logo from "../images/logo.jpg";

export default function Greeting({ textInput, showPageThree }) {
  const clickHandler = () => {
    showPageThree();
  };

  return (
    <div className="App">
      <img src={logo} alt="main" />
      <h1 className="greeting-header">Welcome</h1>
      <h1 className="greeting-header">{textInput}</h1>
      <button onClick={clickHandler}>Start</button>
    </div>
  );
}
