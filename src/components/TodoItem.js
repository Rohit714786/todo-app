import React from "react";

function TodoItem({ todo, onCompleteTodo }) {
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => onCompleteTodo(todo.id)}
    >
      {todo.text}
    </div>
  );
}

export default TodoItem;
