import React from "react";
import TodoItem from "./TodoItem";

/**
 * TodoList
 * - Renders a list of todos. Expects the `todos` array to be already sorted if order matters.
 * - Each child must have a stable `key` (we use `todo.id`) so React can efficiently update items.
 */
export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (!todos || todos.length === 0) return <p>No todos yet. Add one above.</p>;

  return (
    <ul style={{ paddingLeft: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
