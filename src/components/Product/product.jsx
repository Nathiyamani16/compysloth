/* eslint-disable react/prop-types */
import { } from 'react'

import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../Product/product.scss"

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Product = ({ name, image, id, price }) => {

  return (
    <>
      <div className='feature-mar'>

        <div className='container-fe'>
          <img src={image} alt={name} />
          <Link to={`/product/${id}`} className='link'>
            <FaSearch className='search' />
          </Link>
        </div>
        <footer className='name-price'>
          <h5>{name}</h5>
          <p>{USDollar.format(price)}</p>
        </footer>
      </div>

    </>
  );
};

export default Product

