import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './provider/AuthProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/registration',
    element:<Registration></Registration>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
