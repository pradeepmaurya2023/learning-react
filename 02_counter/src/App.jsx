// importing required hooks from react
import { useState } from "react";
import "./App.css";

function App() {
  // normal varibale's upadates wont propagates throughout the UI
  // let counter = 15

  // usestate hook
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <footer>counter : {counter}</footer>
    </>
  );
}

export default App;
