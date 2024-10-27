import { FormEvent, useState } from "react";

const generateRandomNum = () => Math.floor(Math.random() * 100 + 1);

export const GuessingForm = () => {
  const [input, setInput] = useState<string>("");
  const [randomNum, setRandomNum] = useState<number>(generateRandomNum());
  const [message, setMessage] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleGuess = (e: FormEvent<HTMLFormElement>) => {
    const inputNumber = Number(input);
    e.preventDefault();
    if (inputNumber === null) setMessage("Please enter a number");
    else if (inputNumber) {
      setCount((prev) => prev + 1);
      if (inputNumber > randomNum) setMessage("Too high!");
      else if (inputNumber < randomNum) setMessage("Too low!");
      else if (inputNumber === randomNum) {
        setMessage("Correct!");
        setRandomNum(generateRandomNum());
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleGuess}>
        <input
          style={{ border: "3px solid green", width: "80px" }}
          type="number"
          onChange={handleInput}
          value={input}
        />
        <button
          type="submit"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          GUESS
        </button>
      </form>
      <p>Message: {message}</p>
      <p>Guesses: {count}</p>
      <p>Random Number: {randomNum}</p>
    </div>
  );
};
