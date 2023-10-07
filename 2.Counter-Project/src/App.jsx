import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);

  if (age < 0) {
    setAge(0);
  }
  if (age > 22) {
    setAge(22);
  }

  const addAge = () => {
    setAge(age + 1);
  };
  const reduceAge = () => {
    setAge(age - 1);
  };

  return (
    <>
      <h1>debargha nandi</h1>
      <h2>Age : {age}</h2>
      <button onClick={addAge}>Increase Your Age</button>
      <br />
      <br />
      <button onClick={reduceAge}>Decrease Your Age</button>
    </>
  );
}

export default App;
