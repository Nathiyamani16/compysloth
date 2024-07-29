import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { formatPrice } from '../../utils/helpers';
// import ProductImages from '../../components/ProductImages';
// import AddToCart from '../../components/AddToCart';
// import Stars from '../../components/Stars';
// import PageHero from '../../components/PageHero';
// import './SingleProductPage.scss';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://www.course-api.com/react-store-single-product?id=${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <main>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          {/* <ProductImages images={images} /> */}
          <section className='content'>
            <h2>{name}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available: </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU: </span>
              {sku}
            </p>
            <p className='info'>
              <span>Company: </span>
              {company}
            </p>
            {/* {stock > 0 && <AddToCart product={product} />} */}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
