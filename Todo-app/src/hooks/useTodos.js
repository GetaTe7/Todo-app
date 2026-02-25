import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage initially
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos];
}
