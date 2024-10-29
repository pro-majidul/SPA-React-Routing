import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css';
// import App from './App.tsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'

import ShowDetails from './Components/ShowDetails/ShowDetails'
import Posts from './Posts/Posts.jsx'
import SeeMore from './Posts/Seemore/SeeMore.jsx'
import Error from './Components/Error/Error'

import {
  createBrowserRouter,
  RouterProvider,
}
  from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/showdetails/:userId',
        loader: ({ params }) => fetch(` https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <ShowDetails></ShowDetails>
      },
      {
        path: "/posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/post/:id",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <SeeMore></SeeMore>
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
