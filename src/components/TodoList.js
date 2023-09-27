import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onCompleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
