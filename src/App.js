import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cologne" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://tsd-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tanja Sauer
          </a>
          {""} ,is open-soured on {""}
          <a
            href="https://github.com/TaSaCoding/weatherappreact.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://tsd-weatherapp-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
