import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'


import './App.css'

import { Layout } from './components/Navbar/Layout/Layout'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'


function App() {
  
 

  return (
    <>
    <BrowserRouter>
    <div className='app'>
      <Layout />
       </div>
       </BrowserRouter>
    
    </>
  )
}

export default App
