import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Log from './components/log.jsx';

const mainRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'log',
        element:Log,
      }
      
    ],
  },
];


const router = createBrowserRouter(mainRoutes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
