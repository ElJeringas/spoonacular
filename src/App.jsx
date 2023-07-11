
import Pages from "./pages/Pages"
import "../index.css"
import Category from "./components/Category"
function App() {

  return (
    <div className="index">
    <h1>All Recipes</h1>
    <Category/>
    <Pages />
    </div>
  )
}

export default App
