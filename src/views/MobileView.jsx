import SearchBar from "../components/SearchBar"
import NavBar from "../components/NavBar"
import SocialIcons from "../components/SocialIcons"
import Loading from "../components/Loading"

const MobileView = (props) => {
  return (
    <div className="h-full overflow-hidden">
      <div className="bg-black p-5 sm:hidden">
        <a tabIndex={1} onClick={props.onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </a>
        {props.isOpened && (
          <div className="absolute right-0 z-10 h-[96svh] w-full bg-black">
            <div className="mx-auto mt-44 p-5">
              <NavBar />
            </div>
          </div>
        )}
      </div>
      <div className="absolute mx-auto hidden w-full justify-between bg-black text-center sm:flex">
        <div className="flex">
          <p className="m-5 place-self-center text-2xl font-extrabold tracking-wider xl:text-3xl">
            WORDS WIKI
          </p>
          <div className="m-5 flex">
            <NavBar />
          </div>
        </div>
      </div>
      <div className=" h-full w-full bg-zinc-700">
        <h1
          className={`mx-auto w-4/5 pt-24 text-center text-4xl font-extrabold leading-[3.5rem] tracking-wider transition-opacity sm:pt-48 xl:w-3/5 ${
            props.isSearched
              ? "whitespace-nowrap opacity-0 sm:whitespace-normal"
              : ""
          }`}
        >
          Type the word which you are looking information for.
        </h1>
        <div
          className={`w-full transition-transform duration-[400ms] ${
            props.isSearched ? "-translate-y-[100%] sm:-translate-y-[135%]" : ""
          }`}
        >
          <SearchBar
            value={props.searchValue}
            onChange={(val) => props.onChange(val)}
            onSubmit={(e) => props.onSubmit(e)}
          />
          {props.isLoading && (
            <div className="absolute w-full">
              <Loading />
            </div>
          )}
          <div
            className={`absolute w-full overflow-auto px-[10%] text-justify text-lg transition-all duration-300 ${
              props.isLoaded ? "h-[400%] opacity-100 sm:h-[300%]" : "opacity-0"
            }`}
          >
            {props.isLoaded && (
              <>
                <h2 className="my-2 text-3xl font-bold">Definitions: </h2>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  sed aut deleniti iste veritatis delectus quam neque, ipsam
                  exercitationem laborum ipsa! Consequuntur corrupti adipisci
                  sunt cumque officiis nobis, error repudiandae.
                </p>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  sed aut deleniti iste veritatis delectus quam neque, ipsam
                  exercitationem laborum ipsa! Consequuntur corrupti adipisci
                  sunt cumque officiis nobis, error repudiandae.
                </p>
                <h2 className="my-2 mt-5 text-3xl font-bold">Synonyms:</h2>
                <p className="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 hidden w-full bg-black  sm:block">
        <SocialIcons />
      </div>
    </div>
  )
}

export default MobileView
