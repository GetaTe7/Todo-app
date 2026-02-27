import { useState, useEffect, useCallback, useMemo } from "react";

// LocalStorage key. Versioned so structure changes can be handled later.
const STORAGE_KEY = "advanced_todos_v1";

/**
 * Custom hook: useTodos
 * - Encapsulates all todo logic (state, persistence, add, delete, toggle, sorting)
 * - Keeps components focused on rendering and user interactions
 *
 * Why a custom hook?
 * - Reusability: logic can be reused across multiple pages or apps
 * - Separation of concerns: UI components don't manage persistence or complex state updates
 * - Easier to test and reason about
 */
export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to parse todos from localStorage", e);
      return [];
    }
  });

  // Persist todos whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to save todos to localStorage", e);
    }
  }, [todos]);

  /**
   * addTodo
   * - Creates a new todo with a unique id (Date.now())
   * - Uses immutable update (returns a new array) so React state updates reliably
   */
  const addTodo = useCallback((text) => {
    if (!text || !text.trim()) return;
    const newTodo = { id: Date.now(), text: text.trim(), completed: false };
    // Prepend so newest todos appear first within same completion group
    setTodos((prev) => [newTodo, ...prev]);
  }, []);

  /**
   * deleteTodo
   * - Removes the todo by id using an immutable filter
   */
  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  /**
   * toggleTodo
   * - Toggles the completed flag for a todo by id using immutability
   */
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }, []);

  /**
   * sortedTodos
   * - Derived, memoized view of todos
   * - Sort rule: incomplete first (so active tasks are more visible), completed last
   * - Within the same completed state, show newest first (by id timestamp)
   */
  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => {
      if (a.completed === b.completed) return b.id - a.id;
      return a.completed ? 1 : -1;
    });
  }, [todos]);

  return {
    todos: sortedTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    rawTodos: todos,
  };
}
