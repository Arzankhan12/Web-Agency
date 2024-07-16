import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReadMore from './Component/ReadMore/ReadMore.jsx';
import Route from './Route.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Services from './Component/Services/Services.jsx';
import Pages from './Component/Pages/Pages.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>                  
  },
  {
    path:'/',
    element:<Route/>,
    children : [
      {
        path:"readmore",
        element:<ReadMore/>
      },{
        path:"about",
        element:<About/>
      },{
        path:"Services",
        element:<Services/>
      },{
        path:"Pages",
        element:<Pages/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
