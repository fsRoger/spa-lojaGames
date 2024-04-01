import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from "react-hot-toast";

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GlobalStyled } from './GlobalStyled'
import Home from './pages/Home'

import Details from './pages/Details/index.jsx'
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        path: "/",
        element: <>
          <Home />
          <Footer />
        </>
      },
      {
        path: "/details",
        element: <>
          <Details />
          <Footer />
        </>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
