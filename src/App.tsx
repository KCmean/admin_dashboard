import { createBrowserRouter, RouterProvider, Route , Link } from "react-router-dom"
import Users from "./pages/users/Users"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"


function App() {


  const Layout = () => {
    return (
      <div className="name">
          
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path : "/",
      element: (
        <Home/>
      )
    },
    {
      path : "users",
      element : <Users/>
    },
    {
      path : "products",
      element : <Products/>
    },
  ])

  return (
    <RouterProvider  router = {router}/>
  )
}

export default App
