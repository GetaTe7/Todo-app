import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/useTodos";

/**
 * Home page
 * - Uses the `useTodos` custom hook to manage all todo state and persistence.
 * - Components remain simple: `TodoInput` handles input UI, `TodoList` renders items.
 */
export default function Home() {
  // Destructure the API provided by the custom hook.
  // - `todos` is already sorted (incomplete first, completed last)
  // - `addTodo`, `deleteTodo`, `toggleTodo` are pure callback actions
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  // Passing callbacks directly keeps this component free of mutation logic.
  // The hook maintains immutability when updating state so React updates are predictable.
  return (
    <div>
      <h1>Advanced Todo App</h1>

      {/* Controlled input component: keeps form concerns local to the input */}
      <TodoInput addTodo={addTodo} />

      {/* TodoList expects a `todos` array and handlers. Keys are based on `todo.id` in TodoList/TodoItem. */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
