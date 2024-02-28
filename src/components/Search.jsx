const Search = ({ search, setSearch }) => {
  return (
    <div className="search ">
      <h1 className="text-base my-2">Pesquise uma nota :</h1>
      <input
        className="bg-zinc-700 rounded-md px-3 w-full"
        type="text"
        placeholder="..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
