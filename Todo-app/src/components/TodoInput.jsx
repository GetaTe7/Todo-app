import React, { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return; // Prevent empty todos
    addTodo(input); // Pass new todo to parent
    setInput(""); // Clear input
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}
