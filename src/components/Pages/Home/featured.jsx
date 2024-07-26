import { } from 'react'

import { Link } from 'react-router-dom'

const featured = () => {

  return (
    
    <div className='container-fe'>
      <div className='featured-container'>

        <h1 className='text'>Featured Products </h1>
        <Link to="/product">
          <button className='button-all'>ALL PRODUCTS</button>
        </Link>
       
        </div>
      </div>

  )
}

export default featured
