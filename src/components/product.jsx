import  {} from 'react'

import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../components/product.scss"

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price / 100); 
};

const Product = ({ name, image, id, price }) => {

  return (
<>
<div className='feature-mar'>

      <div className='container-fe'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch  className='svg'/>
        </Link>
       
      </div>

      <footer className='name-price'>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
      </div>

</>
  );
};

export default Product



// import {} from 'react';
// import { Link } from 'react-router-dom';
// import Product from '../Products/Product'; // Ensure the correct path
// import feature_products from '../../utils/fe_products'; // Ensure the correct path

// const Feature = () => {
//   return (
//     <div className='feature-con'>
//       <div className='title-con'>
//         <h1>Featured Products</h1>
//         <div className='pro-under'></div>
//       </div>
//       <div className='products-con'>
//         {feature_products.map((product) => (
//           <Product
//             key={product.id}
//             id={product.id}
//             name={product.name}
//             image={product.image}
//             price={product.price}
//           />
//         ))}
//       </div>
//       <Link to="/products">
//         <button className='bt'>ALL PRODUCTS</button>
//       </Link>
//     </div>
//   );
// };

// export default Feature;


