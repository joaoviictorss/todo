const Filter = ({ filter, setFilter, setSort, category, setCategory }) => {
  return (
    <div>
      <div>
        <h1 className="text-base my-2">Status:</h1>
        <select
          className="bg-zinc-700 rounded-md px-1 w-full"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incompleted">Incompletas</option>
        </select>
      </div>
      <div>
        <h1 className="text-base my-2">Categoria:</h1>
        <select
        className="bg-zinc-700 rounded-md px-1 w-full"
        value= {category}
        onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">Todas</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Outra">Outra</option>
        </select>
      </div>
      <div>
        <h1 className="text-base my-2">Ordem alfabética:</h1>
        <button
          onClick={() => setSort("A")}
          className="bg-zinc-700 rounded-md px-1 w-2/5 mr-2"
        >
          A → Z
        </button>
        <button
          onClick={() => setSort("Z")}
          className="bg-zinc-700 rounded-md px-1 w-2/5"
        >
          A → Z
        </button>
      </div>
    </div>
  );
};

export default Filter;
