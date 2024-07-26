import { } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/home'
import Header from './components/Header/header'
import "./app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/Pages/About/about'
import Product from './components/Pages/Products/product'


const App = () => {
  return (
    <>
             <Header />
         <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>


    </>
  )
}
export default App

