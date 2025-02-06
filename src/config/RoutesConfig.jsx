import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import ProductDetail from "../pages/ProductDetail"

export default function RoutesConfig() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product-detail/:id' element={<ProductDetail/>} />
      </Routes>
    </div>
  )
}
