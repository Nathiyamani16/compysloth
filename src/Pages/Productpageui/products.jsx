import { useEffect, useState } from 'react'

import FirstPage from '../firstpage/firstpage.jsx';
import './products.scss'
import { BsFillGridFill, BsList } from 'react-icons/bs';
import FilterProducts from '../../Filterproducts/filterproducts.jsx';
import Product from '../../components/Product/product.jsx';
import Listview from '../../components/Listview/listview.jsx';

const initalFilter = {
  text: "",
  colors: '',
  category: '',
  company: '',
  price: 0,
  maxPrice: 0,
}
const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredproducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState(initalFilter)
  const [selectedfilter, setSelectedFilters] = useState(initalFilter)
  const [view, setView] = useState('grid')
  const [sort, setSort] = useState("price-lowest")

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://www.course-api.com/react-store-products');
      const data = await response.json();
      setProducts(data || []);
      setFilteredProducts(data || []);
      const category = [...new Set(data?.map(curr => curr.category))];
      const company = [...new Set(data?.map(curr => curr.company))];
      const colors = [...new Set(data?.flatMap(curr => curr.colors))];
      const maxPrice = Math.max(...data?.map(curr => curr.price))
      setFilters((pre) => ({
        ...pre,
        category: ["all", ...category],
        company: ["all", ...company],
        colors: ["all", ...colors],
        price: maxPrice,
        maxPrice: maxPrice,
      }));
    }
    fetchProducts();
  }, [])



  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort)

    let sortProducts = [...filteredproducts]

    if (selectedSort === 'price-lowest') {
      sortProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-highest') {
      sortProducts.sort((a, b) => b.price - a.price);
    }
    else if(selectedSort === 'name-a-z'){
      sortProducts.sort((a,b)=> (a.name < b.name ? -1 : 1))
    }
    else if (selectedSort === 'name-z-a'){
      sortProducts.sort((a,b)=> (a.name > b.name ? -1 : 1))

    }
    setFilteredProducts(sortProducts)
  }

  const handleclear = () => {
    setFilteredProducts(products);
    setSelectedFilters(initalFilter)
  }

  const props = {
    setFilteredProducts,
    handleclear,
    setSelectedFilters,
    setFilters,
    products,
    filters,
    selectedfilter,
  }
  return (
    <>
      <FirstPage pageName="products" />
      <div className='productpage-con'>
        <div className='container-grid'>
          <FilterProducts props={props} />
          <div className='page-top'>
            <div className='top-con'>
              <div className='icons-view  btn-container'>
                <button onClick={() => setView('grid')}>
                  <BsFillGridFill className='icons-style' />
                </button>
                <button onClick={() => setView('list')} >
                  <BsList className='icons-style' />
                </button>
              </div>
              <p className='length-pro'>{products.length} Products Found</p>
              <hr />
              <form>
                <label htmlFor='sort'>Sort By</label>
                <select
                  name="sort"
                  id='sort'
                  className='sort-in'
                  value={sort}
                  onChange={handleSortChange}
                >
                  <option value="price-lowest">Price(Lowest)</option>
                  <option value="price-highest">Price(highest)</option>
                  <option value="name-a-z">Name (A-Z)</option>
                  <option value="name-z-a">Name (Z-A)</option>
                </select>
              </form>

            </div>
            <div className='productsshow-con'>
              {view === 'grid' &&
                <div className='product-grid'>
                  {!!filteredproducts?.length && filteredproducts?.map((product) => (
                    <Product
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      className="image-pro"
                    />
                  ))}
                </div>}
              {view === 'list' && <div>
                {!!filteredproducts?.length && filteredproducts?.map((product) => (
                  <Listview
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    className="image-pro"
                  />
                ))}
              </div>}
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
export default Products

