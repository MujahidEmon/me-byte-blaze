import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{ Toaster } from 'react-hot-toast';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './mainRoutes/mainRoutes';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>,
)
