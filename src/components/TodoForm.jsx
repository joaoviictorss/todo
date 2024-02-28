import { useState } from "react";

const TodoForm = ({ toggleToTasks, addTodo }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !text || !category) return
    addTodo(title, text, category)
    setTitle("")
    setText("")
    setCategory("")
    toggleToTasks()
  };

  return (
    <div className="flex flex-col h-full justify-between w-full">
      <form onSubmit={handleSubmit} className="flex flex-col  justify-between">
        <span className="text-purple-300 text-2xl mb-4">Adicionar tarefa:</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Digite o titulo"
          className="bg-zinc-800 rounded-lg p-2"
          required
        />
        <span className="text-purple-300 text-2xl my-4 ">Nota:</span>
        <textarea
          rows="4"
          className="bg-zinc-800 rounded-lg p-2"
          placeholder="Digite a nota"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-zinc-800 mt-4 w-40 p-2 rounded-lg"
          required
        >
          <option value="">Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Outra">Outra</option>
        </select>
        <div className=" flex justify-between mt-4">
          <button onClick={toggleToTasks} className="w-12 h-10  rounded-full">
            <svg
              viewBox="0 0 1024 1024"
              fill="#c9c9c9"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#c9c9c9"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                  fill=""
                ></path>
              </g>
            </svg>
          </button>
          <input
            type="submit"
            value="Adicionar"
            className="bg-purple-400 rounded-3xl cursor-pointer w-32"
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
