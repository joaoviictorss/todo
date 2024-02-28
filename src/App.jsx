import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";
import MenuButton from "./components/svgs/MenuButton";

const dataLocalStorage = JSON.parse(localStorage.getItem("todos"))

function App() {
  const [formOpen, setFormOpen] = useState(true);

  const [todos, setTodos] = useState(dataLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");

  const addTodo = (title, text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        text,
        category,
        isCompleted: false,
      },
    ];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    localStorage.removeItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  function toggleToTaskOrForm() {
    setFormOpen((open) => !open);
  }

  return (
    <div className="app bg-neutral-950 text-white shadow-lg h-full rounded-xl py-7 px-12 overflow-hidden ">
      <h1 className="logo text-4xl flex items-center justify-between">
        <div className="logo">
          <span>to</span>
          <span className="text-purple-400 ">do.</span>
        </div>
        <button className="w-5 h-4 sm:hidden">
          <MenuButton />
        </button>
      </h1>
      <div className="container flex gap-4 mt-12 h-full w-full">
        <div className="filters bg-zinc-900 rounded-xl w-2/5 p-5 h-5/6 hidden sm:block">
          <span className="text-purple-300 text-2xl mb-4">Filtros</span>
          <Search search={search} setSearch={setSearch} />
          <Filter
            filter={filter}
            setFilter={setFilter}
            setSort={setSort}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="bg-zinc-900 rounded-xl w-full p-5  h-5/6 ">
          {formOpen ? (
            <Todo
              todos={todos}
              toggleToForm={toggleToTaskOrForm}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              search={search}
              filter={filter}
              sort={sort}
              category={category}
            />
          ) : (
            <TodoForm toggleToTasks={toggleToTaskOrForm} addTodo={addTodo} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
