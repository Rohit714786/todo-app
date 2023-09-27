import React, { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      onAddTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new TODO..."
        value={todoText}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
