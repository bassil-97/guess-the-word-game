import React, { useState } from "react";
import "./SelectedWordDisplay.css";

import Button from "@mui/material/Button";

export default function SelectedWordDisplay({
  handleCheckTrueAnswer,
  handleRestartGame,
}) {
  const [userInput, setUserInput] = useState("");
  const selectedWordLength = localStorage?.getItem("SelectedWord").length;

  const codeChangeHandler = (event) => {
    const element = event.target;
    setUserInput((prev) => prev + element.value);
    const nextSibling = element.nextElementSibling;
    nextSibling ? nextSibling.focus() : element.blur();
  };

  return (
    <form action="#" id="selected-word__form">
      <h4 className="text-center mb-4">Enter your guess</h4>
      <div className="d-flex mb-3">
        {new Array(selectedWordLength).fill(0).map((item, index) => (
          <input
            name={`code-${index}`}
            key={index}
            type="text"
            class="form-control"
            onChange={(event) => codeChangeHandler(event)}
            maxLength={1}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center gap-2">
        <Button
          variant="contained"
          onClick={() => handleCheckTrueAnswer(userInput)}
        >
          Check my guess
        </Button>
        <Button variant="outlined" onClick={handleRestartGame}>
          play again
        </Button>
      </div>
    </form>
  );
}
