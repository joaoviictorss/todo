import DeleteButton from "./svgs/DeleteButton";
import CompleteButton from "./svgs/CompleteButton";

const Todo = ({
  todos,
  toggleToForm,
  removeTodo,
  completeTodo,
  search,
  filter,
  sort,
  category,
}) => {
  return (
    <div className=" flex flex-col h-full justify-between">
      <span className="text-purple-300 text-2xl ">Tasks</span>
      <div className="todos h-3/4  scroll-m-1 overflow-y-auto">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            category === "All"
              ? true
              : category === "Trabalho"
              ? todo.category === "Trabalho"
              : category === "Pessoal"
              ? todo.category === "Pessoal"
              : category === "Estudos"
              ? todo.category === "Estudos"
              : category === "Outra"
              ? todo.category === "Outra"
              : false
          )
          .filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "A"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title)
          )
          .map((todo) => (
            <div
              key={todo.id}
              className={` flex items-center bg-zinc-800 my-4 rounded-xl p-4 gap-2 justify-between ${
                todo.isCompleted ? "line-through" : ""
              }`}
            >
              <p className="text-xs">
                {todo.title} --- ({todo.category})
              </p>
              <div className="flex gap-2">
                <button
                  className="bg-green-200 w-4 h-4 rounded-sm hover:scale-125 duration-200"
                  onClick={() => completeTodo(todo.id)}
                >
                  <CompleteButton />
                </button>
                <button
                  className="bg-red-200 w-4 h-4 rounded-sm hover:scale-125 duration-200"
                  onClick={() => removeTodo(todo.id)}
                >
                  <DeleteButton />
                </button>
              </div>
            </div>
          ))}
      </div>
      <button
        className="bg-purple-400 p-2 rounded-3xl  w-32 self-end justify-self-end hover:scale-105 duration-200"
        onClick={toggleToForm}
      >
        Adicionar Task
      </button>
    </div>
  );
};

export default Todo;
