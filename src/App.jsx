import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Header from './components/Header/header'
import "./app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/about'
import Footer from './Pages/Footer/footer'
import SingleProduct from './Pages/sigleproducts/singleproduct'
import Cart from './Pages/Cart/cart'
import Products from './Pages/Productpageui/products'

const App = () => {
  return (
    <>
      <Header name={name} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App




