import Counter from "./counter";
import Batsman from "./batsman";

import "./App.css";

function App() {
  function handleClick() {
    alert("Button clicked.");
  }

  const handleClick3 = () => {
    alert("Button clicked.");
  };

  const handleClick5 =(num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert("Button clicked 4.")}>Click Me 4</button>

      <button onClick={() => handleClick5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
