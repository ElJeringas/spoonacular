
import Pages from "./pages/Pages"
import "../index.css"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import { NavLink} from 'react-router-dom'

function App() {

  return (
    <div className="index">
    
    <BrowserRouter>
    <NavLink to={'/'}>
            <h1>Spoonacular</h1>
    </NavLink>
      <Search/>
      <Category/>
      <Pages />
    </BrowserRouter>
    </div>
  )
}

export default App
