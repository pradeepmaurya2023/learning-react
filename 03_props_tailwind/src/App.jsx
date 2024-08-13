import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-yellow-300">Hello</h1>
      <div className="flex gap-5">

      <Card name = "Khushi"/>
      <Card name = "Chutiya" />
      </div>
    </>
  );
}

export default App;
