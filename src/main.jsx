import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { element } from 'three/examples/jsm/nodes/Nodes.js';


const router = createBrowserRouter([
  {
    path:"*", element:<h1>Not found</h1>
  },
  {
    path:"/", element:<App/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
