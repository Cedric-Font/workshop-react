import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './component/Navbar'
import Footer from './component/Footer'
import Categories from './component/Categories'



function App() {
  let acceuil = [

    {
      img: "/src/assets/starter1.png",
      title: "Starters"
    },
    {
      img: "/src/assets/starter2.png",
      title: "Dishes"
    },
    {
      img: "/src/assets/starter3.png",
      title: "Desserts"
    },
  ]
  const router = createBrowserRouter([
    {
      path: '/',

      element:
      <NavBar/>
      <div className='colorDiv' >
      <div 
      className='mainContainer' > 
      <h2 className='welcome' >Welcome</h2>
      <img className='firstImg' src="/src/assets/starter4.png" alt="" />
      <p className='acceuilParagraf' >Your futur recipe <br /> is here!</p>
      <Categories acceuil={acceuil} />
      </div>
      </div>

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




  

  return ( <div>
  <RouterProvider router={router} />

  

  

  </div>
  
  
  )


}

export default App
