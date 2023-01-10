import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DrawingArea.css";

import Canvas from "../../components/Canvas/Canvas";
import SelectedWordDisplay from "../../components/SelectedWordDisplay/SelectedWordDisplay";
import Modal from "../../components/Modal/Modal";

export default function DrawingArea() {
  const navigate = useNavigate();
  const timeout = useRef(null);
  const selectedWord = localStorage?.getItem("SelectedWord");
  const [counter, setCounter] = useState(40);
  const [trueGuess, setTrueGuess] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter > 0) {
      timeout.current = setTimeout(() => setCounter(counter - 1), 1000);
    }
    counter < 1 && handleCheckTrueAnswer();
  }, [counter]);

  const handleCheckTrueAnswer = (userGuess) => {
    if (counter < 1 && !trueGuess) {
      handleClickOpen();
    } else if (counter > 0 && selectedWord === userGuess) {
      clearTimeout(timeout.current);
      setTrueGuess(true);
      handleClickOpen();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRestartGame = () => {
    localStorage.removeItem("SelectedWord");
    navigate("/");
  };

  return (
    <div className="drwaing-area__container">
      <Modal
        open={open}
        trueGuess={trueGuess}
        handleClose={handleClose}
        handleRestartGame={handleRestartGame}
      />
      <div className="container">
        <div className="canvas-header">
          <h1>Guess The Word</h1>
          <div className="game-timer">
            <h1
              className={`${counter > 0 && counter <= 10 ? "red-class" : ""}`}
            >
              {counter}
            </h1>
          </div>
        </div>
        <Canvas />
        <hr className="w-100 my-5" />
        <SelectedWordDisplay
          handleCheckTrueAnswer={handleCheckTrueAnswer}
          handleRestartGame={handleRestartGame}
        />
      </div>
    </div>
  );
}
