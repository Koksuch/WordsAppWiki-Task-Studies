const NavBar = () => {
  return (
    // zrobić ring tego samgo koloru co guzik
    <nav className="flex w-full flex-col text-xl font-medium sm:flex-row md:gap-3 lg:flex-col lg:gap-5">
      <a
        className="mx-2 rounded-2xl bg-zinc-600 p-3 transition-colors hover:cursor-pointer hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-slate-400 md:mx-7"
        tabIndex="1"
      >
        Search Word
      </a>
      <a
        className="mx-2 rounded-2xl p-3 transition-colors hover:cursor-pointer hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-slate-400 md:mx-7"
        tabIndex="1"
      >
        About us
      </a>
      <a
        className="mx-2 rounded-2xl p-3 transition-colors hover:cursor-pointer hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-slate-400 md:mx-7"
        tabIndex="1"
      >
        Contact
      </a>
    </nav>
  )
}

export default NavBar
