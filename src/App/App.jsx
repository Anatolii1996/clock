import "./App.scss";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="break-label">
          <p className="label">Break Length</p>
          <button><FaArrowDown /> </button>
          <p className="count">5</p>
          <button><FaArrowUp/></button>
        </div>
        <div id="session-label">
          <p>Session Length</p>
        </div>
      </div>
    </div>
  );
}

export default App;
