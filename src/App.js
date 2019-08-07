import React from "react";
import "./styling/App.css";

import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import MainGoal from "./components/MainGoal";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="app">
      <Weather />
      <Greeting />
      <MainGoal />
      <Todo />
    </div>
  );
};

export default App;
