import { useEffect, useState } from 'react'
import "./products.jsx"
import FirstPage from '../firstpage/firstpage.jsx';
import './products.scss'

import { BsFillGridFill, BsList } from 'react-icons/bs';
import FilterProducts from '../../Filterproducts/filterproducts.jsx';
import Product from '../../components/Product/product.jsx';

const Products = () => {
const [products,setProducts]=useState([])


useEffect(()=>{
  const fetchProduct =async () =>{
    const response =await fetch ("https://www.course-api.com/react-store-products");
    const data =await response.json();
    setProducts(data);
    console.log(data);
  }
  fetchProduct();
},[])



  return (
    <>
      <FirstPage pageName="products" />
      <div className='productpage-con'>
        <div className='container-grid'>
          <FilterProducts />

          <div className='page-top'>
          
            <div className='icons-view  btn-container'>
              <button >
                <BsFillGridFill className='icons-style' />
              </button>

              <button>
                <BsList className='icons-style' />
              </button>
            </div>
            <div className=''>
              <p> Products Found</p>
            </div>
            <hr />
            <form>
              <label htmlFor='sort'>Sort By</label>
              <select
                name="sort"
                id='sort'


                className='sort-in'
              >
                <option value="price-lowest">Price(Lowest)</option>
                <option value="price-highest">Price(highest)</option>
                <option value="name-a-z">Name (A-Z)</option>
                <option value="name-z-a">Name (Z-A)</option>
              </select>
            </form>

          <div className='productsshow-con'>
            <div className='product-grid'>
              <div className='imag-container'>
              {products.map((product)=>(
             <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            className="image-pro"
          /> 
             ))}
              </div>
             
            
            </div>
          </div>
        </div>
        </div>
      </div>


    </>
  )
}

export default Products



