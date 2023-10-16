import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RecapRecipe from './component/RecapRecipe'
import Recipe from './component/Recipe'
import Starters from './component/Starters'
import Dishes from './component/Dishes'
import Desserts from './component/Desserts'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Accueil</h1>
    },
    {
      path: '/starters',
      element: 
      <div className="mainContainer" >
      <Starters />
      </div>
    },

    {
      path: '/recipe/:id',
      element: <Recipe />
    },

    {
      path: '/dishes',
      element: <Dishes />
    },
    {
      path: '/desserts',
      element: <Desserts />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
