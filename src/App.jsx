
import Pages from "./pages/Pages"
import "../index.css"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <div className="index">
    <h1>All Recipes</h1>
    <BrowserRouter>
      <Category/>
      <Pages />
    </BrowserRouter>
    </div>
  )
}

export default App
