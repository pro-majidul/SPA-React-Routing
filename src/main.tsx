import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
// import App from './App.tsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/contact" ,
        element : <Contact></Contact>
      },
      {
        path : "/users",
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App></App> */}
  </StrictMode>,
)
