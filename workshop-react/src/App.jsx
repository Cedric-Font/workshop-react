import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RecapRecipe from './component/RecapRecipe'
import Recipe from './component/Recipe'
import Starters from './component/Starters'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Accueil</h1>
    },
    {
      path: '/starters',
      element: <Starters />
    },
    {
      path: '/recipe/:id',
      element: <Recipe />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
