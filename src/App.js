import React from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./redux/TodoContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoProvider>
          <TodoTemplate>
            <TodoHead></TodoHead>
            <TodoList></TodoList>
            <TodoCreate></TodoCreate>
          </TodoTemplate>
        </TodoProvider>
      </header>
    </div>
  );
}

export default App;
