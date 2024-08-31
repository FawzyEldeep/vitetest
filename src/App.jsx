import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from "./Component/Home/Home"
import Cart from "./Component/Cart/Cart"
import Brands from "./Component/Brands/Brands"
import Register from "./Component/Register/Register"
import Login from "./Component/Login/Login"
import Categories from './Component/Categories/Categories'
import Products from "./Component/Products/Products"
import Notfound from "./Component/Notfound/Notfound"
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';
import CategoryDetails from './Component/CategoryDetails/CategoryDetails';
import BrandDetails from './Component/BrandDetails/BrandDetails';
import Checkout from './Component/Checkout/Checkout';
import Allorders from './Component/Allorders/Allorders';







let query =new QueryClient();





let x =createBrowserRouter([
  {path :"" ,element:<Layout/>,children:[
    {index:true ,element:<Home />},
    {path:"cart" ,element: <ProtectedRoute> <Cart /> </ProtectedRoute> },
    {path:"brands" ,element: <ProtectedRoute> <Brands /> </ProtectedRoute>},
    {path:"/branddetails/:id" ,element: <ProtectedRoute> <BrandDetails /> </ProtectedRoute>},
    {path:"register" ,element:<Register />},
    {path:"login" ,element:<Login />},
    {path:"checkout" ,element:<Checkout />},
    {path:"allorders" ,element:<Allorders />},
    {path:"categories" ,element: <ProtectedRoute> <Categories /> </ProtectedRoute>},
    {path:"/categorydetails/:id" ,element: <ProtectedRoute> <CategoryDetails /> </ProtectedRoute>},
    {path:"products" ,element: <ProtectedRoute> <Products /> </ProtectedRoute>},
    {path:"productdetails/:id/:category" ,element: <ProtectedRoute> <ProductDetails /> </ProtectedRoute>},
    {path:"*" ,element:<Notfound />},
 
  ]}
])
 




function App() {


  return <>

  <UserContextProvider>
 <CounterContextProvider>
  <QueryClientProvider client={query}>
    <CartContextProvider>
    <RouterProvider router={x}></RouterProvider>
    <Toaster/>
    </CartContextProvider>
  <ReactQueryDevtools/>
  </QueryClientProvider>
</CounterContextProvider>
 </UserContextProvider>

  

    </>
  
}

export default App
