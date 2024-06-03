import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import WorkoutLog from './components/workoutlog.jsx';
import Home from './components/home.jsx';
import FoodLog from './components/food_log.jsx';
import WaterLog from './components/water_log.jsx';
import Progress from './components/progress.jsx';
const mainRoutes = [
  {
    path: '/', 
    element: <Layout />,
    children: [
      {
        path:'WorkoutLog',
        element:<WorkoutLog/>,
      },
      {
        path:'',
        element:<Home/>,
      },

      {
        path:'FoodLog',
        element:<FoodLog/>
      },

      {
        path:'WaterLog',
        element:<WaterLog/>
      },

      {
        path:'Progress',
        element:<Progress/>
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
