import React from "react";

/**
 * TodoItem
 * - Renders a single todo item with toggle and delete actions.
 * - Keeps UI responsibilities only; all state changes are passed up via callbacks.
 *
 * Notes:
 * - We rely on a stable `todo.id` as the React list key to help React reconcile efficiently.
 * - Immutability: `toggleTodo` and `deleteTodo` should update state immutably (handled in the hook).
 */
export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
