import React from "react";
import Calculator from "./Calculator";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Random Password Generator</h1>
        <Calculator />
      </div>
      <footer>
        Open-Source by{" "}
        <a
          href="https://github.com/CarlaAll/random_password_calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carla Allenbach
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://generate-random-pw.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
export default App;
