import { useState } from "react";
import "./App.scss";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function App() {
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);

  return (
    <div className="App">
      <div className="container">
        <div id="break-label">
          <p className="label">Break Length</p>
          <button><FaArrowDown /> </button>
          <p className="count">{breakCount}</p>
          <button><FaArrowUp/></button>
        </div>
        <div id="session-label">
          <p className="label">Session Length</p>
          <button><FaArrowDown /> </button>
          <p className="count">{sessionCount}</p>
          <button><FaArrowUp/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
