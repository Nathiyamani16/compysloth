import { useState } from 'react'
import "../Cart/cart.scss"
import { Link } from 'react-router-dom'
import FirstPage from '../firstpage/firstpage'
import { useDispatch, useSelector } from 'react-redux'
import ButtonCart from '../../components/Button/button'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { decrQuantity, incQuantity, removeProduct } from '../../Redux/productSlice'
import { MdDelete } from "react-icons/md";


const Cart = () => {
    // const [cart,setcart]=useState(0)



    const dispatch = useDispatch();
    const { cartproduct: product } = useSelector(state => state.products);
    const handleChangeQuantity = (type, id) => {
        if (type === 'dec') {
            dispatch(decrQuantity({ id: id }));
        }
        else if (type === 'inc') {
            dispatch(incQuantity({id:id}))
        }
    }

    const handleRemove =(id)=>{
        dispatch(removeProduct({id:id}))
    }
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

    // const itemsheader={Item,price,Quantity,Subtotal}
    return (
        <>
            <FirstPage pageName="cart" />
            <div className='main-table-con'>

                <table className='table-con'>
                    {/* <div className='table-con'> */}
                    <thead className='headcart-item'>
                        <tr className='headercart'>
                            <th className='item-img'>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    {/* <hr className='cart-line' /> */}
                    <tbody>
                        {!!product?.length && product?.map((curr, idx) => (
                            <tr key={idx} className='data-rows'>
                                <td className='text-img-con'><img src={curr.image} alt="cart-image" className='cart-imag' />
                                    <span className='name-cart'>{curr.name}</span> 
                                    {/* <span>Colors:</span>   <span style={{background:curr.color,display:"flex",padding:"5px", borderRadius:"4px"}}
                                    className=''></span> */}
                                 </td>

                                <td className='price-list'>${curr.price}</td>
                                <td className='button-cart' >
                                    <button className='cart-button' type='button' onClick={() => handleChangeQuantity('dec', curr.id)}>
                                        <FaMinus />
                                    </button>
                                    <span>{curr.quantity}</span>
                                    <button className='cart-button' type='button' onClick={() => handleChangeQuantity('inc', curr.id)}>
                                        <FaPlus />
                                    </button>
                                </td>
                                <td>${(curr.price * curr.quantity)}</td>
                                <td className='detele-btn'><button onClick={()=>handleRemove(curr.id)}><MdDelete /></button></td>
                            </tr>

                        ))}
                        {/* <hr className='cart-line' /> */}
                    </tbody>

                </table>
                <div>
                    <div className='shoping-btn'>
                        <Link
                            to="/products"
                            className="btn-fi">
                            Continue Shopping
                        </Link>
                        <button
                            to="/products"
                            className="btn2">
                            Clear Shopping Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart

