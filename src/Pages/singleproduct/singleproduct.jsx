// import  { useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSingleProduct } from '../../slices/productsSlice';
// import { formatPrice } from '../../utils/helpers';
// import {
//   ProductImages,
//   AddToCart,
//   Stars,
//   PageHero,
// } from '../../components';
// import Wrapper from './singleProductPage-style';

// const SingleProductPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { single_product, single_product_error: error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchSingleProduct(`${url}${id}`));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (error) {
//       setTimeout(() => {
//         navigate('/');
//       }, 3000);
//     }
//   }, [error, navigate]);

//   const {
//     name,
//     price,
//     description,
//     stock,
//     stars,
//     reviews,
//     id: sku,
//     company,
//     images,
//   } = single_product;

//   return (
//     <Wrapper>
//       <PageHero title={name} product />
//       <div className='section section-center page'>
//         <Link to='/products' className='btn'>
//           back to products
//         </Link>
//         <div className='product-center'>
//           <ProductImages images={images} />
//           <section className='content'>
//             <h2>{name}</h2>
//             <Stars stars={stars} reviews={reviews} />
//             <h5 className='price'>{formatPrice(price)}</h5>
//             <p className='desc'>{description}</p>
//             <p className='info'>
//               <span>Available: </span>
//               {stock > 0 ? 'In stock' : 'out of stock'}
//             </p>
//             <p className='info'>
//               <span>SKU: </span>
//               {sku}
//             </p>
//             <p className='info'>
//               <span>Available: </span>
//               {company}
//             </p>
//             {stock > 0 && <AddToCart product={single_product} />}
//           </section>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default SingleProductPage;