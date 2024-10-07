"use client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { useState } from "react";

export default function Game({ min = 1, max = 100 }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * max) + 1);
  const [minGuess, setMinGuess] = useState(min);
  const [maxGuess, setMaxGuess] = useState(max);
  const [tryeText, setTryText] = useState(
    "waiting for you to guess the number!"
  );
  const [tries, setTries] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [guess, setGuess] = useState("");
  const restartGame = () => {
    setNumber(Math.floor(Math.random() * max) + 1);
    setMinGuess(min);
    setMaxGuess(max);
    setTryText("waiting for you to guess the number!");
    setTries([]);
    setGuess("");
    setIsFinished(false);
  };
  const handleTryeText = () => {
    const parsedTry = parseInt(guess);
    if (parsedTry === number) {
      return `You guessed the number after ${tries.length} tryes!`;
    }
    if (parsedTry > number) {
      if (parsedTry < maxGuess) {
        setMaxGuess(parsedTry);
      }
      return "Try a lower number!";
    }
    if (parsedTry < number) {
      if (parsedTry > minGuess) {
        setMinGuess(parsedTry);
      }
      return "Try a higher number!";
    }
    return "waiting for you to guess the number!";
  };

  const handleGuess = () => {
    if (parseInt(guess) === number) {
      setNumber(Math.floor(Math.random() * 10) + 1);
      setTries([]);
    } else {
      setTries([...tries, parseInt(guess)]);
    }
    setGuess("");
    setTryText(handleTryeText());
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      alignContent="center"
    >
      <Typography mt={8} variant="h1">
        Guess the number between {minGuess} and {maxGuess}!
      </Typography>
      <Typography mt={8} p={3} variant="h6">
        {tryeText}
      </Typography>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box
          width="50%"
          component="form"
          onSubmit={(e) => {
            handleGuess();
            e.preventDefault();
          }}
        >
          {!isFinished ? (
            <TextField
              label="Guess"
              variant="outlined"
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
          ) : (
            <Button variant="contained" onClick={() => restartGame()}>
              Play Again
            </Button>
          )}
        </Box>
        <Box textAlign="center" width="50%">
          <Typography variant="h6">Tries</Typography>
          {tries.map((t, i) => (
            <Typography key={i}>{t}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
