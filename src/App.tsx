import { useContext } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import ThemeContext from "./context/theme.context"

function App() {
  const {dark}: any = useContext(ThemeContext)

  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
     <Header/>
     <Main/>
    </div>
  )
}

export default App
