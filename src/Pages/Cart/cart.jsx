import { useState } from 'react'
import "../Cart/cart.scss"
import { Link } from 'react-router-dom'
import FirstPage from '../firstpage/firstpage'
import { useDispatch, useSelector } from 'react-redux'
import ButtonCart from '../../components/Button/button'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { clearCart, decrQuantity, incQuantity, removeProduct } from '../../Redux/productSlice'
import { MdDelete } from "react-icons/md";


const Cart = () => {
    // const [cart,setcart]=useState(0)



    const dispatch = useDispatch();
    const { cartproduct: product } = useSelector(state => state.products);
    const handleChangeQuantity = (type, id, color) => {
        if (type === 'dec') {
            dispatch(decrQuantity({ id: id, color: color }));
        }
        else if (type === 'inc') {
            dispatch(incQuantity({ id: id, color: color }))
        }
    }

    const handleRemove = (id, color) => {
        dispatch(removeProduct({ id: id, color: color }))
    }
    const handleClearcart = () => {
        dispatch(clearCart())
    }
    const calsubTotal = () => {
        return product.reduce((cur, idx) => cur + (idx.price * idx.quantity), 0)
    }

    const shippingfee = 5.34;
    const subTotal = calsubTotal();

    const orderTotal = subTotal + shippingfee;


    if (product?.length === 0) {
        return (
            <>
                <FirstPage pageName="cart" />
                <div className='cart-con'>
                    <div className='cartemp-page'>
                        <h1>Your cart is empty</h1>
                        <Link
                            to="/products"
                            className="btn-fill">
                            FILL IT
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <FirstPage pageName="cart" />
            <div className='main-table-con'>
    
               <table className='table-con'>
           
                    <thead className='table-head'>
                        <tr className='headercart'>
                            <th className='item-img'>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                  
                    <hr className='cart-line' />
                    <tbody className='tabel-data'>
                        {!!product?.length && product?.map((curr, idx) => (
                            <tr key={idx} className='data-rows'>
                                <td className='text-img-con'>
                                    <img src={curr.image} alt="cart-image" className='cart-imag' />
                                    <span className='name-cart'><h6>{curr.name}
                                        <p className='colors-bg'>Colors:
                                            <div
                                                style={{
                                                    background: curr.color,
                                                    display: "flex",
                                                    borderRadius: "4px",
                                                    margin: "4px",
                                                    padding: '5px',
                                                }}
                                                className=''></div>
                                        </p>
                                    </h6>
                                    </span>
                                </td>
                                <td className='price-list'>${parseFloat(curr.price)}</td>
                                <td className='button-cart' >
                                    <button className='cart-button' type='button' onClick={() => handleChangeQuantity('dec', curr.id, curr.color)}>
                                        <FaMinus />
                                    </button>
                                    <span>{curr.quantity}</span>
                                    <button className='cart-button' type='button' onClick={() => handleChangeQuantity('inc', curr.id, curr.color)}>
                                        <FaPlus />
                                    </button>
                                </td>
                                <td className='quentity-subtotal'>${(curr.price * curr.quantity)}</td>
                                <td className='detele-btn'><button onClick={() => handleRemove(curr.id, curr.color)}><MdDelete /></button></td>
                                <td></td>
                            </tr>


                        ))}
                        {/* <hr className='cart-line' /> */}
                    </tbody>

                </table>
              
          
                <hr />
                <div>
                    <div className='shoping-btn'>
                        <Link
                            to="/products"
                            className="btn-fi">
                            Continue Shopping
                        </Link>
                        <button
                            onClick={handleClearcart}
                            className="btn2">
                            Clear Shopping Cart
                        </button>
                    </div>
                </div>
                <div className='totalmain-con'>
                    <div className='total-con'>
                        <div className='sub'>
                            <h6>Subtotal :</h6>
                            <span>${subTotal}</span>
                        </div>
                        <div className='shipping'>
                            <h6>Shipping Fee :</h6>
                            <span>$ 5.34</span>
                        </div>
                        <hr />
                        <div className='order-total'><h4>Order Total :</h4><span>${orderTotal}</span></div>

                    </div>
                    <button className='log-btn'>Login</button>
                </div>
</div>
        </>
    )
}

export default Cart




