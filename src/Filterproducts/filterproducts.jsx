// import { useEffect, useState } from 'react'
import { useState } from "react"
import "./filterproducts.scss"
import { FaCheck } from 'react-icons/fa'

const Filterproducts = ({ props }) => {
  const {
    setFilteredProducts = () => { },
    products = [],
    filters,
    handleclear = () => { },
    setFilters = () => { },
    setSelectedFilters = () => { },
    selectedfilter,
  } = props

  const handleFilterChange = (name, value) => {
    let tempProducts = [...products]
    switch (name) {
      case 'text':
        tempProducts = tempProducts.filter((curr) => curr.name.toLowerCase().includes(value));
        break;
      case 'category':
        tempProducts = tempProducts?.filter((curr) => curr.category === value);
        setSelectedFilters(pre => ({
          ...pre,
          category: value
        }))
        break;
      case 'company':
        tempProducts = tempProducts?.filter((curr) => curr.company === value);
        break;
      case 'colors':
        tempProducts = tempProducts.filter((curr) => curr.colors.includes(value));
        setSelectedFilters(pre => ({
          ...pre,
          colors: value
        }))
        break;
      case 'price':
        setFilters((pre) => ({
          ...pre,
          price: value
        }))
        tempProducts = tempProducts?.filter((curr) => curr.price <= value)
        break;
      default:
    }
    setFilteredProducts(tempProducts)
  }
  return (
    <>
      <div className='side-filter-con'>
        <div className='form-con'>
          <div className='search-co'>
            <input
              type='text' s
              name='text'
              onChange={(e) => handleFilterChange('text', e.target.value)}
              placeholder='Search...'
              className='search-con' />
          </div>
          <div className='category'>
            <h5>Category</h5>
            {!!filters?.category?.length && filters?.category?.map((curr, idx) => (
              <button
                key={idx}
                type='button'
                name='category'
                className={`button-ca ${curr === selectedfilter?.category && "border-bottom"}`}
                onClick={() => handleFilterChange('category', curr)}>
                {curr}
              </button>))}
          </div>
          <div className='company-con'>
            <h3>Company</h3>
            <select className='company-select'
              onChange={(e) => handleFilterChange('company', e.target.value)} >
              {!!filters?.company?.length && filters?.company?.map((curr, idx) => (
                <option key={idx} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
          <div className='color-sec '>
            <h5>Colors</h5>
            <div className="d-flex gap-1">
              {!!filters?.colors?.length && filters?.colors?.map((curr, idx) =>
                <button
                  key={idx}
                  style={{ background: curr, padding: "10px" }}
                  name="colors"
                  className='color-btn-single'
                  onClick={() => handleFilterChange('colors', curr)}>
                  {selectedfilter?.colors === curr ? <FaCheck className='tick-search' /> : null}
                </button>)}
            </div>
          </div>
          <div>
            <label>Price</label>
            <p>${filters?.price}</p>
            <input
              type='range'
              name='price'
              min='0'
              value={filters?.price}
              max={filters?.maxPrice}
              onChange={(e) => handleFilterChange('price', e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              className="clear-btn"
              onClick={handleclear}
            >Clear Filter</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filterproducts


