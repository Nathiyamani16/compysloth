import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../Listview/listview.scss'

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

const Listview = ({ name, image, id, price, description }) => {

    return (
        <>
            <div className='list-con'>
                <img src={image} alt={name} />
                <Link to={`/product/${id}`} className='link'>
                    <FaSearch className='search' />
                </Link>
                <div className='left-sec'>
                    <h5>{name}</h5>
                    <p className='price-list'>{USDollar.format(price)}</p>
                    <p>{description}</p>
                   <Link to={`/product/${id}`}>
                   <button className='list-butt'>DETAILS</button>
                   </Link>
                </div>
              
            </div>
        </>
    );
};


export default Listview
