import React from "react";
import "./App.css";
import Header from "./components/header";
import Questions from "./components/questions";
import Result from "./components/result";
import Solutions from "./components/solutions";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Header />
        <Questions/>
        <Solutions />
      </div>
      <div className="Result">
        <Result />
      </div>
    </div>
  );
}

export default App;
