// // import { } from 'react'
// // import "../FetureProducts/feature.scss"
// // import { Link } from 'react-router-dom'
// // import feature_products from "../../utils/fe_products"


// // const Feature = () => {
// //     return (
// //         <>
// //          <div className='feature-con'>
// //             <div className='title-con'>
// //           <h1>Feature Products</h1>
// //           <div className='pro-under'></div>
// //           </div>
// //         <div>
// //         <div className='fe-container featured'>
          
// //           {feature_products.map((product) => {
// //             const { id, price, image ,name} = product;
      
  
// //             return (
            
// //               <div key={id} className='product'>
              
// //                 <Link to="singleproducts">
// //                 <img src={image} alt={name} className='product-img' />
// //                 </Link>
// //                 <div className='name-con'>
// //                 <p className='product-name'>{name}</p>
// //                 <p className='product-price'>{price / 100} USD</p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
     
      

// //          <Link to="/">
// //          <button className='bt'>ALL PRODUCTS</button>
// //          </Link>
// //          </div>
// //         </div>
// //         </>
// //     )
// // }

// // export default Feature


// import {} from 'react';
// import Product from '../../components/product'; 
// import feature_products from '../../utils/fe_products'; 
// import { Link } from 'react-router-dom';
// import "../FetureProducts/feature.scss"

// const Feature = () => {
//   return (
//     <div className='feature-con'>
//       <div className='title-con'>
//         <h1>Featured Products</h1>
//         <div className='pro-under'></div>
//       </div>
//       <div className=' featured '>
//         {feature_products.map((product) => (
//           <Product
//             key={product.id}
//             id={product.id}
//             name={product.name}
//             image={product.image}
//             price={product.price}
//           />
//         ))}


//       </div >
//       <Link to="/products">
//         <button className='bt'>ALL PRODUCTS</button>
//       </Link>
     
      
//     </div>
//   );
// };

// export default Feature;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getProductsSuccess, getProductsError } from '../../Redux/productSlice';
import { Link } from 'react-router-dom';

import Product from '../../components/product';
import "../FetureProducts/feature.scss"

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const { products_error: error, featured_products: featured } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.pujakaitem.com/api/products');
        dispatch(getProductsSuccess(response.data));
      } catch (error) {
        dispatch(getProductsError());
      }
    };

    fetchProducts();
  }, [dispatch]);

  // if (error) {
  //   return <Error />;
  // }

  return (
    <div className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to='products' className='btn'>
        All products
      </Link>
    </div>
  );
};

export default FeaturedProducts;
