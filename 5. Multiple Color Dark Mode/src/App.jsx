import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";

function App() {
  const [changeColor, setChangeColor] = useState("black");
  const [text , setText] = useState("Debargha Nandi")

  return (
    <>
    <Navbar setChangeColor={setChangeColor} setText={setText}/>
    <MainBody changeColor={changeColor} text={text}/>
    </>
  );
}

export default App;
