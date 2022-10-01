import { useEffect, useState } from "react";
import Counter from "./Counter";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("some code");
  }, [visible]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setVisible(!visible)}>{`${
        visible ? "Hide" : "Show"
      } counter`}</button>

      {/* conditional rendering */}
      {visible && <Counter count={count} />}
    </div>
  );
}
