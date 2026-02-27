import React, { useState } from "react";

/**
 * TodoInput
 * - Controlled input component for adding todos.
 * - Keeps its own local input state and calls `addTodo` when submitted.
 *
 * Why controlled inputs?
 * - They give full control over the input value from React state.
 * - Easier validation, clearing, and predictable behavior.
 */
export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!input.trim()) return; // Prevent empty todos
    addTodo(input);
    setInput(""); // Clear input after successful add
  };

  return (
    <form onSubmit={handleAdd} style={{ display: "flex", gap: 8 }}>
      <input
        aria-label="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
