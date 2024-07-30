/* eslint-disable react/prop-types */

import {} from 'react'
import "./section.scss"
import { Link } from 'react-router-dom'


const FirstPage = ({pageName,product}) => {
  return (
    <div className='sec-container'>
    <div className='sec-pro'>
    <h3 className=''>
    <Link to="/" className='text-name'>Home</Link>
      {product && <Link to="/products" className='text-name'>/ Products</Link>}/ {pageName}
    </h3>
    </div>  
    </div>
  )
}

export default FirstPage
