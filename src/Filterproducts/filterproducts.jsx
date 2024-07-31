import { useEffect, useState } from 'react'
import "./filterproducts.scss"


const Filterproducts = () => {

  const [filters, setFilteredProducts] = useState({
    text: "",
    colors: ["all"],
    category: ["all"],
    company: ["all"],
    price: 0,

  })

  const [products, setProducts] = useState()
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://www.course-api.com/react-store-products');
      const data = await response.json();
      setProducts(data);

      const category = [...new Set(data?.map(curr => curr.category))];
      const company = [...new Set(data?.map(curr => curr.company))];
      const colors = [...new Set(data?.map(curr => curr.colors))];



      setFilteredProducts((pre) => ({
        ...pre,
        category: ["all", ...category],
        company: ["all", ...company],
        colors: ["all", ...colors],
        

      }));
    }
    fetchProducts();
  }, [])



  
  const catagories = filters.category
  const companyfilter = filters.company
  const colorsproduct = filters.colors



  return (
    <>
      <div className='side-filter-con'>
        <div className='form-con'>
          <div className='search-con'>
            <input
              text='text'
              type='text' 
              className='search-input'/>
          </div>
          <div className='category'>
            <h5>Category</h5>
            {catagories.map((cur, idx) => (
              <button
                key={idx}
                type='button'
                name='category'
                className='button-ca' >
                {cur}
              </button>
            ))}
          </div>
          <div className='company-con'>
            <h3>Company</h3>
            <select>
              {companyfilter.map((curr, idx) =>
                <option
                  key={idx}
                  type="select"
                  className='company-select'
                >{curr}</option>
              )}
            </select>
          </div>
          <div className='colors-con'>
            {colorsproduct.map((curr, idx) => {
              console.log(curr);
              <button
                key={idx}
                style={{ background: curr }}
              >
                {curr}

              </button>
            })}
          </div>
          <div>Price</div>



        </div>

      </div>
    </>

  )
}

export default Filterproducts


