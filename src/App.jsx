import { useState } from "react"
import DesktopView from "./views/DesktopView"
import MobileView from "./views/MobileView"

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [isSearched, setIsSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSearched(true)
    setIsLoading(true)
    setIsLoaded(false)
    setTimeout(() => {
      setIsLoading(false)
      setIsLoaded(true)
    }, 3000)
  }

  const handleClick = () => {
    setIsOpened(!isOpened)
  }
  return (
    <>
      <div className="hidden h-full w-full lg:block">
        <DesktopView
          searchValue={searchValue}
          isSearched={isSearched}
          isLoading={isLoading}
          isLoaded={isLoaded}
          onSubmit={(e) => handleSubmit(e)}
          onChange={(val) => setSearchValue(val)}
        />
      </div>
      <div className="block h-full w-full lg:hidden">
        <MobileView
          searchValue={searchValue}
          isSearched={isSearched}
          isLoading={isLoading}
          isLoaded={isLoaded}
          isOpened={isOpened}
          onClick={handleClick}
          onSubmit={(e) => handleSubmit(e)}
          onChange={(val) => setSearchValue(val)}
        />
      </div>
    </>
  )
}

export default App
