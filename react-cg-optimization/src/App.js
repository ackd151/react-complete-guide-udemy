import React from "react";
import { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowP((prevState) => !prevState);
  };

  return (
    <div className="app">
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
    </div>
  );
}

export default App;
