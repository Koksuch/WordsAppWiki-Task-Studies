const SearchBar = (props) => {
  return (
    <form
      className="relative mx-auto my-0 w-full p-10 text-2xl font-medium sm:w-4/5 lg:w-3/5"
      onSubmit={(e) => props.onSubmit(e)}
    >
      <div className="relative w-full">
        <input
          className="w-full rounded-full bg-zinc-500 p-6 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
          type="text"
          placeholder="Enter the word"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <button
          type="submit"
          // slate-400 moze bd to kolor guzik
          className="absolute right-0 top-0 m-3 rounded-full bg-sky-500 p-3 px-6 text-white focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:opacity-50"
          disabled={!props.value}
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
