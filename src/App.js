import React from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoTemplate>
          <TodoHead></TodoHead>
        </TodoTemplate>
      </header>
    </div>
  );
}

export default App;
