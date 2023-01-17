import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
      <button
        onClick={() =>
          setCounter((count) => {
            return count - 1;
          })
        }
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() =>
          setCounter((count) => {
            return count + 1;
          })
        }
      >
        +
      </button>{" "}
    </div>
  );
};

export default App;