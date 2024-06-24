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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
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
  <>
     <QueryClientProvider client={queryClient}>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
  </>,
)
