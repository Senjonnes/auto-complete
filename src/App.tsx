import React from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete";
import { AutoCompleteData } from "./models/AutoComplete.model";
import data from "./data/data.json";

const App = () => {
  const handleValue = (value: AutoCompleteData): void => {
    console.log(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Search Country</p>
        <AutoComplete hanleValue={handleValue} dataSet={data} />
      </header>
    </div>
  );
};

export default App;
