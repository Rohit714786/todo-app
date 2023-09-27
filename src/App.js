import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const getLocalTodos = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};
function App() {
  const [todos, setTodos] = useState(getLocalTodos());

  // Save TODOs to local storage on component mount
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Load TODOs from local storage on component mount

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    // Separate completed and active todos
    const completedTodos = updatedTodos.filter((todo) => todo.completed);
    const activeTodos = updatedTodos.filter((todo) => !todo.completed);

    // Sort the lists by creation or completion date
    const sortedActiveTodos = activeTodos.sort((a, b) => b.id - a.id);
    const sortedCompletedTodos = completedTodos.sort(
      (a, b) => b.completed - a.completed
    );

    const sortedTodos = [...sortedActiveTodos, ...sortedCompletedTodos];

    setTodos(sortedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <button onClick={resetTodos} className="reset-button">
        Reset
      </button>
      <h1>TODO App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
