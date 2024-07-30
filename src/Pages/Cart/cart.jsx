import { } from 'react'
import "../Cart/cart.scss"
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='cart-con'>
            <div className='empty-page'>
                <h1>Your cart is empty</h1>
          
            <Link
                to="/product"
                className="btn-fill">
                FILL IT
            </Link>
            </div>

        </div>
    )
}

export default Cart