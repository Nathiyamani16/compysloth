import { } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Header from './components/Header/header'
import "./app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/about'

// import Footer from './Pages/Footer/footer'
import SingleProduct from './Pages/sigleproducts/singleproduct'
import Cart from './Pages/Cart/cart'
import ProductPage from './Pages/Productpage/products'


const App = () => {
  return (
    <>
         <Header />
         <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='products' element={<ProductPage/>} />
          <Route path="/product/:id" element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        {/* <Footer/> */}


    </>
  )
}
export default App






// import  { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getSingleProduct} from '../../Redux/productSlice';
// // import { single_product_url as url } from '../utils/constants';
// // import { formatPrice } from '../utils/helpers';


// import { Link } from 'react-router-dom';
// import ProductImages from '../../components/productImg/productimg';
// import Stars from '../../components/Starts/starts';
// import AddToCart from '../../components/AddCart/addcart';

// const SingleProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const {

//     single_product: product,
    
//   } = getSingleProduct();

//   useEffect(() => {
//     const     fetchSingleProduct = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         product(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };
//         fetchProduct();
//   }, [id]);


//   const  url ='https://www.course-api.com/react-store-single-product?id=`'

//   useEffect(() => {
//     fetchSingleProduct(`${url}${id}`);
//     // eslint-disable-next-line
//   }, [id]);
//   useEffect(() => {
   
//       setTimeout(() => {
//         navigate('/');
//       }, 3000);
    

//   },);


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
//   } = product;
//   return (
//     <>
//       {/* <PageHero title={name} product /> */}
//       <div className='section section-center page'>
//         <Link to='/products' className='btn'>
//           back to products
//         </Link>
//         <div className='product-center'>
//           <ProductImages images={images} />
//           <section className='content'>
//             <h2>{name}</h2>
//             <Stars stars={stars} reviews={reviews} />
//             <h5 className='price'>{price}</h5>
//             <p className='desc'>{description}</p>
//             <p className='info'>
//               <span>Available : </span>
//               {stock > 0 ? 'In stock' : 'out of stock'}
//             </p>
//             <p className='info'>
//               <span>SKU :</span>
//               {sku}
//             </p>
//             <p className='info'>
//               <span>Brand :</span>
//               {company}
//             </p>
//             <hr />
//             {stock > 0 && <AddToCart product={product} />}
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SingleProduct;
// // const Wrapper = styled.main`
// //   .product-center {
// //     display: grid;
// //     gap: 4rem;
// //     margin-top: 2rem;
// //   }
// //   .price {
// //     color: var(--clr-primary-5);
// //   }
// //   .desc {
// //     line-height: 2;
// //     max-width: 45em;
// //   }
// //   .info {
// //     text-transform: capitalize;
// //     width: 300px;
// //     display: grid;
// //     grid-template-columns: 125px 1fr;
// //     span {
// //       font-weight: 700;
// //     }
// //   }

// //   @media (min-width: 992px) {
// //     .product-center {
// //       grid-template-columns: 1fr 1fr;
// //       align-items: center;
// //     }
// //     .price {
// //       font-size: 1.25rem;
// //     }
// //   }
// // `;

// // export default SingleProduct;



