import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <div>
        <img
          className="logo-webpack"
          src="https://webpack.js.org/site-logo.1fcab817090e78435061.svg"
          alt="webpack icon"
        />
        <p className="txt-desc">
          This is a react app build using webpack config along with babel.
        </p>
      </div>
    </div>
  );
}
