import {} from 'react'
import { IoGrid } from "react-icons/io5";

import "../Productpage/products.jsx"
import FirstPage from '../section/firstpage';
import { HiOutlineViewList } from "react-icons/hi";
import '../Productpage/products.scss'
const Products= () => {
  return (
    <>
    <FirstPage pageName="products"/>
    <div className='productpage-con'>
        <div className='container-grid'>
           <div className='side-filter-con'>
            <input type='search' className='search-bar' placeholder='Search'/>

            </div> 
           
           <div className='page-top'>
            <div className='icons-view'>
            <IoGrid  className='icons-style'/>

            <HiOutlineViewList  className='icons-style'/>


            </div>

           </div>
        </div>

    </div>
    </>
  )
}

export default Products