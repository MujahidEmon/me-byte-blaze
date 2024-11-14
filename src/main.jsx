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
import HomePage from './Components/Home/HomePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'Blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=30&top=7')
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
