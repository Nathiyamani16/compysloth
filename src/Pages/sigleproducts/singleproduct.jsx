import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleProduct } from '../../Redux/productSlice';
import ProductImages from '../../components/productImg/productimg';
import Stars from '../../components/Starts/star';
import AddToCart from '../../components/AddCart/addcart';
import axios from 'axios';
import "../sigleproducts/singleproduct.scss"
import FirstPage from '../firstpage/firstpage';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://www.course-api.com/react-store-single-product?id=${id}`);
      setProduct(response?.data);
    }
    fetchProduct();
  }, [id]);

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
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
    <>
      <FirstPage pageName={name} product />
      <div className='single-page'>
        <div className=' section-center page'>
          <Link to='/products' className='btn1'>
            Back to Products
          </Link>
          <div className='product-center'>
            <div className='img-grid'>
              <ProductImages images={images} />
              <section className='content'>
                <h1>{name}</h1>
                <Stars stars={stars} reviews={reviews} />
                <h5 className='price1'>{USDollar.format(price)}</h5>
                <p className='description'>{description}</p>
                <p className='information'>
                  <span>Available: </span>
                  {stock > 0 ? 'In stock' : 'Out of stock'}
                </p>
                <p className='information'>
                  <span>SKU: </span>
                  {sku}
                </p>
                <p className='information'>
                  <span>Brand: </span>
                  {company}
                </p>
                <hr />
                {stock > 0 && <AddToCart product={product} />}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;





