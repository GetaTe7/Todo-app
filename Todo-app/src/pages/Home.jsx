import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/useTodos";

export default function Home() {
  const [todos, setTodos] = useTodos();

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  return (
    <div>
      <h1>Advanced Todo App </h1>

      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={sortedTodos} // Show sorted todos
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
