import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa';
import './addcart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Redux/productSlice';

const AddToCart = ({ product}) => {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  // const {cartProduct:product}=useSelector(state => state.products)

  const increase = () => {
    setQuantity((preAmt) => {
      let temAmt = preAmt + 1;
      if (temAmt > stock) {
        temAmt = stock;
      }
      return temAmt;
    });
  };

  const decrease = () => {
    setQuantity((preAmt) => {
      let temAmt = preAmt - 1;
      if (temAmt < 1) {
        temAmt = 1;
      }
      return temAmt;
    });
  };

  const handleAddToCart = () => {
    dispatch(addCart({ product, color: mainColor, quantity: quantity ,id:id}))
    navigate("/cart")
  };

  return (
    <div className='add-to-cart'>
      <div className='color-sec'>
        <span className='co'>colors : </span>
        <div>
          {colors.map((curr, index) => (
            <button
              key={index}
              style={{ background: curr }}
              className={`${mainColor === curr ? 'color-btn-single active' : 'color-btn-single'}`}
              onClick={() => setMainColor(curr)}
            >
              {mainColor === curr ? <FaCheck className='tick' /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className='btn-container'>
        <div className='am-btns'>
          <button type='button' className='am-btn' onClick={decrease}>
            <FaMinus />
          </button>
          <h2 className='am'>{quantity}</h2>
          <button type='button' className='am-btn' onClick={increase}>
            <FaPlus />
          </button>
        </div>
        <button
          className='add-btn'
          onClick={handleAddToCart} >
          Add to cart
        </button>

      </div>
    </div>
  );
};
export default AddToCart;