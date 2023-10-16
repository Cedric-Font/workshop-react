import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RecapRecipe from './component/RecapRecipe'
import Recipe from './component/Recipe'
import { useState } from 'react'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Accueil</h1>
    },
    {
      path: '/starters',
      element: (<>
      <NavBar/>
      const [display, setDisplay] = useState(0);
      display === 0 ? {recipes.map(recipe => <RecapRecipe key={recipe.id}/>)} : null,
      </>)
    },
    {
      path: '/dishes',
      element: (<>
      <NavBar/>
      const [display, setDisplay] = useState(0);
      display === 0 ? {recipes.map(recipe => <RecapRecipe key={recipe.id}/>)} : null,
      </>
      )
    },
    {
      path: '/desserts',
      element: (<>
      <NavBar/>
      const [display, setDisplay] = useState(0);
      display === 0 ? {recipes.map(recipe => <RecapRecipe key={recipe.id}/>)} : null,
      </>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default App
