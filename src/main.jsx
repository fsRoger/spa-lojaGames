import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GlobalStyled } from './GlobalStyled'
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import Details from './pages/Details/index.jsx'
import { Search } from './pages/Search/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />
      },
      {
        path: "/details",
        element: <Details />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
