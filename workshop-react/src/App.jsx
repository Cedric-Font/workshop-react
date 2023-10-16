import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Accueil</h1>
    },
    {
      path: '/starters',
      element: <h1>Starters</h1>
    },
    {
      path: '/dishes',
      element: <h1>Dishes</h1>
    },
    {
      path: '/desserts',
      element: <h1>Desserts</h1>
    }
  ])

  return <RouterProvider router={router} />
}

export default App
