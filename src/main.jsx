import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Blogs from './Components/Routes/Blogs/Blogs.jsx';
import BookMarks from './Components/Routes/BookMakrks/BookMarks.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: 'Blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'BookMarks',
        element: <BookMarks></BookMarks>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
