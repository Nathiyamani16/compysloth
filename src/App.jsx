import { } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Header from './components/Header/header'
import "./app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/about'
import Product from './Pages/Products/product'
import Footer from './Pages/Footer/footer'
import SingleProduct from './Pages/sigleproducts/singleproduct'


const App = () => {
  return (
    <>
             <Header />
         <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path="/singleproducts" element={<SingleProduct/>}/>
        </Routes>
        <Footer/>


    </>
  )
}
export default App

