import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App></App>
  </StrictMode>,
)