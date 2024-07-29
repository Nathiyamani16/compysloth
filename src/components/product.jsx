// import  {} from 'react'

// import { FaSearch } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import "../components/product.scss"

// const formatPrice = (price) => {
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }).format(price / 100); 
// };

// const Product = ({ name, image, id, price }) => {

//   return (
// <>
// <div className='feature-mar'>

//       <div className='container-fe'>
//         <img src={image} alt={name} />
//         <Link to={`/products/${id}`} className='link'>
//           <FaSearch  className='svg'/>
//         </Link>
       
//       </div>

//       <footer className='name-price'>
//         <h5>{name}</h5>
//         <p>{formatPrice(price)}</p>
//       </footer>
//       </div>

// </>
//   );
// };

// export default Product


import React from 'react';

// import { formatPrice } from '../../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../components/product.scss"

const Product = ({ image, name, price, id }) => {
  return (
    <>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{price}</p>
        {/* <p>{formatPrice(price)}</p> */}
      </footer>
    </>
  );
};

export default Product;
