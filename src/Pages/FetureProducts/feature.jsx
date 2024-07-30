import {} from 'react';
import Product from '../../components/Product/product'; 
import feature_products from '../../utils/fe_products'; 
import { Link } from 'react-router-dom';
import "../FetureProducts/feature.scss"

const Feature = () => {
  return (
    <div className='feature-con '>
      <div className='title-con'>
        <h1>Featured Products</h1>
        <div className='pro-under'></div>
      </div>
      <div className='featured'>
        {feature_products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}


      </div >
      <Link to="/products">
        <button className='bt'>ALL PRODUCTS</button>
      </Link>
     
      
    </div>
  );
};

export default Feature;

