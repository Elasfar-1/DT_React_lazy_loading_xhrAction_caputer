import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Root from './routes/root.jsx'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './routes/about.jsx';

const router = createBrowserRouter([
  {
    path:'/DT_Abdo', 
    element: <Root/>
  }, 
  {
    path:'/DT_Abdo_About', 
    element: <About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
