import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
  import {
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './loaders/cartProductsLoader.js';
import CheckOut from './components/CheckOut/CheckOut.jsx';
import SignUp from './SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
      element: <Shop></Shop>,
       loader: () => fetch('http://localhost:5000/productsCount')
    
      },
      {
        path: "/orders",
      element: <Orders></Orders>,
      loader: cartProductsLoader
    
      },
      {
        path: "/inventory",
      element: <PrivateRoute><Inventory></Inventory></PrivateRoute>,
    
      },
      {
        path: "/checkout",
      element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
    
      },
      {
        path: "/login",
      element: <Login></Login>,
    
      },
      {
        path: "/signup",
      element: <SignUp></SignUp>
    
      },
    ]
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
