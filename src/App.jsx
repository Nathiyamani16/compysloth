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
import SideMenu from './components/Header/sidemenu'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <>

      <SideMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      {!isMenuOpen &&
        <>
          <Header toggleMenu={toggleMenu} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </>
      }
    </>


  )
}
export default App




