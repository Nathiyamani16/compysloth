import { } from 'react'
import "../Filterproducts/filterproducts.scss"
import { useSelector } from 'react-redux'
import   { updateFilters } from '../Redux/filterSlice'

const FilterProducts = () => {

const {filter_products:text,company,color,price,shipping}=useSelector(state => state.filter)

// const categories=filterSlice(cat)
    return (
        <div className='filterproducts-con'>
            <div className='side-filter-con'>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div>
                        <input
                            type='text'
                            name='text'
                            placeholder='search'
                             value={text}
                             onChange={updateFilters}
                            className='search-bar'
                        />
                    </div>
                    <div>
                        <h5>Category</h5>
                        <div>
                            {/* {categories.map((curr,idx) => {
                                return(
                                    <button
                                    key={idx}
                                    type='button'
                                    onClick={updateFilters}
                                    className={`${category === curr.toLowerCase()? 'active' : null}`}
                                    >
                                        {curr}
                                </button>
                                )
                            })} */}
                        </div>
                    </div>


                </form>

            </div>

        </div>
    )
}

export default FilterProducts




// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Wrapper from './filters-style';
// import { 
//   updateFilters, 
//   clearFilters, 
//   filterProducts, 
//   sortProducts 
// } from '../../filterSlice';
// import { getUniqueValues, formatPrice } from '../../utils/helpers';
// import { FaCheck } from 'react-icons/fa';

// const Filters = () => {
//   const dispatch = useDispatch();
//   const {
//     all_products,
//     filters: {
//       text,
//       category,
//       company,
//       color,
//       min_price,
//       price,
//       max_price,
//       shipping,
//     },
//   } = useSelector((state) => state.filter);

//   const categories = getUniqueValues(all_products, 'category');
//   const companies = getUniqueValues(all_products, 'company');
//   const colors = getUniqueValues(all_products, 'colors');

//   const handleUpdateFilters = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     if (name === 'category') {
//       value = e.target.textContent;
//     }

//     if (name === 'color') {
//       value = e.target.dataset.color;
//     }

//     if (name === 'price') {
//       value = Number(value);
//     }

//     if (name === 'shipping') {
//       value = e.target.checked;
//     }

//     dispatch(updateFilters({ name, value }));
//     dispatch(filterProducts());
//     dispatch(sortProducts());
//   };

//   return (
//     <Wrapper>
//       <div className='content'>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <div className='form-control'>
//             <input
//               type='text'
//               name='text'
//               placeholder='search'
//               className='search-input'
//               value={text}
//               onChange={handleUpdateFilters}
//             />
//           </div>
//           <div className='form-control'>
//             <h5>category</h5>
//             <div>
//               {categories.map((c, index) => (
//                 <button
//                   key={index}
//                   onClick={handleUpdateFilters}
//                   type='button'
//                   name='category'
//                   className={`${
//                     category === c.toLowerCase() ? 'active' : null
//                   }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className='form-control'>
//             <h5>company</h5>
//             <select
//               name='company'
//               value={company}
//               onChange={handleUpdateFilters}
//               className='company'
//             >
//               {companies.map((c, index) => (
//                 <option key={index} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className='form-control'>
//             <h5>colors</h5>
//             <div className='colors'>
//               {colors.map((c, index) => (
//                 c === 'all' ? (
//                   <button
//                     key={index}
//                     name='color'
//                     onClick={handleUpdateFilters}
//                     data-color='all'
//                     className={`${
//                       color === 'all' ? 'all-btn active' : 'all-btn'
//                     }`}
//                   >
//                     all
//                   </button>
//                 ) : (
//                   <button
//                     key={index}
//                     name='color'
//                     style={{ background: c }}
//                     className={`${
//                       color === c ? 'color-btn active' : 'color-btn'
//                     }`}
//                     data-color={c}
//                     onClick={handleUpdateFilters}
//                   >
//                     {color === c ? <FaCheck /> : null}
//                   </button>
//                 )
//               ))}
//             </div>
//           </div>
//           <div className='form-control'>
//             <h5>price</h5>
//             <p className='price'>{formatPrice(price)}</p>
//             <input
//               type='range'
//               name='price'
//               min={min_price}
//               max={max_price}
//               onChange={handleUpdateFilters}
//               value={price}
//             />
//           </div>
//           <div className='form-control shipping'>
//             <label htmlFor='shipping'> free shipping</label>
//             <input
//               type='checkbox'
//               name='shipping'
//               id='shipping'
//               onChange={handleUpdateFilters}
//               checked={shipping}
//             />
//           </div>
//         </form>
//         <button type='button' className='clear-btn' onClick={() => dispatch(clearFilters())}>
//           clear filters
//         </button>
//       </div>
//     </Wrapper>
//   );
// };

// export default Filters;
