import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://tsd-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tanja Sauer
          </a>
          {""} and is {""}
          <a
            href="https://github.com/TaSaCoding/weatherappreact.git"
            target="_blank"
            rel="noreferrer"
          >
            open-soured
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
