import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RecapRecipe from './component/RecapRecipe'
import Recipe from './component/Recipe'
import Starters from './component/Starters'
import Dishes from './component/Dishes'
import Desserts from './component/Desserts'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Categories from './component/Categories'





function App() {
  let acceuil = [

    {
      img: "/src/assets/starter1.png",
      title: "Starters",
      redirect: '/starters',
    },
    {
      img: "/src/assets/starter2.png",
      title: "Dishes",
      redirect: '/dishes',
    },
    {
      img: "/src/assets/starter3.png",
      title: "Desserts",
      redirect: '/desserts',
    },
  ]
  const router = createBrowserRouter([
    {
      path: '/',

      element:
        <div>
          <NavBar />
          <div className='colorDiv' >
            <div
              className='mainContainer' >
              <h2 className='welcome' >Welcome</h2>
              <img className='firstImg' src="/src/assets/starter4.png" alt="" />
              <p className='acceuilParagraf' >Your futur recipe <br /> is here!</p>
              <Categories acceuil={acceuil} />
            </div>
          </div>
        </div>

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






  return (<div>
    <RouterProvider router={router} />





  </div>


  )


}

export default App
