import { GuessingForm } from "./components/GuessingForm";

function App() {
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Guess a random number between 1 and 100!</h1>
      <GuessingForm />
    </div>
  );
}

export default App;
