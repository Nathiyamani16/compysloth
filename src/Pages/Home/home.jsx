import { NavLink } from "react-router-dom";
// import { Button } from "react-bootstrap";
import "../Home/home.scss"
import Services from "../Service/services"
import Contact from "../contact/contact";
import Feature from "../FetureProducts/feature";

const Home = () => {


  return (
<>
    <div className="container">
      <div className="grid">
        <div className="hero-section-data">
          <h1 className="">Design Your
            <br /> Comfort Zone </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
            Iusto, at sed omnis corporis doloremque possimus velit!
            <br/>Repudiandae nisi odit, aperiam odio ducimus, obcaecati
            <br/>libero et quia tempora excepturi quis alias?
          </p>
          <NavLink to="/products">
            <button className="button">SHOP NOW</button>
          </NavLink>
        </div>

        <div className="hero-section-image">
          <figure>
            <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
              alt="hero-section-photo"
              className="img-style"
            />
            <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" alt="person working" className="accent-img" />
          </figure>
        </div>
      </div>
    </div>
    <Feature/>
    <Services/>
    <Contact/>
    </>
  );
};
export default Home

// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from './productsSlice';

// const store = configureStore({
//   reducer: {
//     products: productsReducer,
//   },
// });

// export default store;
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchProducts } from '../../slices/productsSlice';
// import Wrapper from './featuredProducts-style';
// import Product from '../product/Product';

// const FeaturedProducts = () => {
//   const dispatch = useDispatch();
//   const { featured_products: featured } = useSelector((state) => state.products);

//   useEffect(() => {
//     const url = 'YOUR_PRODUCTS_URL'; // Replace with your actual products URL
//     dispatch(fetchProducts(url));
//   }, [dispatch]);

//   return (
//     <Wrapper className='section'>
//       <div className='title'>
//         <h2>featured products</h2>
//         <div className='underline'></div>
//       </div>
//       <div className='section-center featured'>
//         {featured.slice(0, 3).map((product) => {
//           return <Product key={product.id} {...product} />;
//         })}
//       </div>
//       <Link to='products' className='btn'>
//         All products
//       </Link>
//     </Wrapper>
//   );
// };

// export default FeaturedProducts;

// import styled from 'styled-components';

// const Wrapper = styled.main`
//   .product-center {
//     display: grid;
//     gap: 4rem;
//     margin-top: 2rem;
//   }
//   .price {
//     color: var(--clr-primary-5);
//   }
//   .desc {
//     line-height: 2;
//     max-width: 45em;
//   }
//   .info {
//     text-transform: capitalize;
//     width: 300px;
//     display: grid;
//     grid-template-columns: 125px 1fr;
//     span {
//       font-weight: 700;
//     }
//   }

//   @media (min-width: 992px) {
//     .product-center {
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//     }
//     .price {
//       font-size: 1.25rem;
//     }
//   }
// `;

// export default Wrapper;