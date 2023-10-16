import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './component/Navbar'
import Footer from './component/Footer'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar/>
    },
    {
      path: '/starters',
      element: <h1>starters</h1>
    },
    {
      path: '/dishes',
      element: <h1>Dishes</h1>
    },
    {
      path: '/desserts',
      element: <h1>Desserts</h1>
    },
  ])

  return (
          <RouterProvider router={router}/>       
  )
}

export default App
