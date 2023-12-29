import SearchBar from "../components/SearchBar"
import NavBar from "../components/NavBar"
import SocialIcons from "../components/SocialIcons"
import Loading from "../components/Loading"

const DesktopView = (props) => {
  return (
    <div className=" flex h-full">
      <div className="mx-auto flex w-1/5 flex-col justify-between bg-black text-center">
        <div>
          <p className="m-10 text-2xl font-extrabold tracking-wider xl:text-3xl">
            WORDS WIKI
          </p>
          <NavBar />
        </div>

        <SocialIcons />
      </div>
      <div className=" w-4/5 bg-zinc-700">
        <h1
          className={`mx-auto w-4/5 pt-48 text-center text-4xl font-extrabold leading-[3.5rem] tracking-wider transition-opacity xl:w-3/5 ${
            props.isSearched ? "opacity-0" : ""
          }`}
        >
          Type the word which you are looking information for.
        </h1>
        <div
          className={`w-full transition-transform duration-[400ms] ${
            props.isSearched ? "-translate-y-[150%]" : ""
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
            className={`absolute w-full px-[10%] text-justify text-lg transition-all duration-300 ${
              props.isLoaded ? "h-[300%] opacity-100" : "opacity-0"
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
    </div>
  )
}

export default DesktopView
