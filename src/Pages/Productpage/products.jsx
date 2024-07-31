import { } from 'react'
import "../Productpage/products.jsx"
import FirstPage from '../firstpage/firstpage.jsx';
import '../Productpage/products.scss'
import { useDispatch, useSelector} from 'react-redux';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import FilterProducts from '../../Filterproducts/filterproducts.jsx';
import { setListview,setGridview,updateSort } from '../../Redux/filterSlice.jsx';

const Products = () => {
  const dispatch = useDispatch();
  const { filter_products: product,gridview,sort,} = useSelector(state => state.filter)

return (
  <>
    <FirstPage pageName="products" />
    <div className='productpage-con'>
      <div className='container-grid'>
        <FilterProducts/>

        <div className='page-top'>
          <div className='icons-view  btn-container'>
            <button onClick={setGridview} className={`${gridview? 'active ': null }`}>              
              <BsFillGridFill className='icons-style' />
            </button>

            <button  onClick={setListview} className={`${ !gridview ? "active" :null}`}>
              <BsList className='icons-style' />
            </button>
            </div>
             <div>
              <p>{product.length} Products Found</p>
             </div>
             <hr/>
             <form>
              <label htmlFor='sort'>Sort By</label>
              <select 
              name="sort"
              id='sort'
              value={sort}
              onChange={(e)=>dispatch(updateSort(e.target.value))}
              className='sort-in'
              >
                <option value="price-lowest">Price (Lowest)</option>
                <option value="price-highest">Price (highest)</option>
                <option value="name-a-z">Name (A-Z)</option>
                <option value="name-z-a">Name (Z-A)</option>

              </select>
             </form>


          </div>

        </div>
      </div>


  </>
)
}

export default Products





// const Sort = () => {
//   const dispatch = useDispatch();
//   const { filtered_products: products, grid_view, sort } = useSelector((state) => state.filter);

//   return (
//     <div className="sort-wrapper">
//       <div className='btn-container'>
//         <button
//           type='button'
//           className={grid_view ? 'active' : ''}
//           onClick={() => dispatch(setGridView())}
//         >
//           <BsFillGridFill />
//         </button>
//         <button
//           type='button'
//           className={!grid_view ? 'active' : ''}
//           onClick={() => dispatch(setListView())}
//         >
//           <BsList />
//         </button>
//       </div>
//       <p>{products.length} products found</p>
//       <hr />
//       <form>
//         <label htmlFor='sort'>Sort by</label>
//         <select
//           name='sort'
//           id='sort'
//           className='sort-input'
//           value={sort}
//           onChange={(e) => dispatch(updateSort(e.target.value))}
//         >
//           <option value='price-lowest'>price (lowest)</option>
//           <option value='price-highest'>price (highest)</option>
//           <option value='name-a'>name (a-z)</option>
//           <option value='name-z'>name (z-a)</option>
//         </select>
//       </form>
//     </div>
//   );
// };

// export default Sort;
