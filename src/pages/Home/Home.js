import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import WordInput from "../../components/WordInput/WordInput";

import { Button } from "@mui/material";

export default function Home() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const handleWordChange = (e) => setWord(e.target.value);

  const handleStartGame = () => {
    localStorage.setItem("SelectedWord", word);
    navigate("/drawing-area");
  };

  return (
    <div className="home-page__container">
      <h1>Enter Your Word</h1>
      <WordInput handleWordChange={handleWordChange} />
      <Button variant="contained" onClick={handleStartGame}>
        start game
      </Button>
    </div>
  );
}
