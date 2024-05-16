import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import Signup from './components/Authentication_UI/Signup.jsx';
import Signin from './components/Authentication_UI/Signin.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order", element: <PlaceOrder /> },

    ]
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/signin',
    element: <Signin />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(


  <RecoilRoot >

    <RouterProvider router={router} />
  </RecoilRoot>
);
