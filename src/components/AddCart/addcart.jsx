/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../Redux/cartSlice"
import './addcart.scss';

// eslint-disable-next-line react/prop-types
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((preAmt) => {
      let temAmt = preAmt + 1;
      if (temAmt > stock) {
        temAmt = stock;
      }
      return temAmt;
    });
  };

  const decrease = () => {
    setAmount((preAmt) => {
      let temAmt = preAmt - 1;
      if (temAmt < 1) {
        temAmt = 1;
      }
      return temAmt;
    });
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, color: mainColor, amount, product }));
  };

  return (
    <div className='add-to-cart'>
      <div className='color-sec'>
        <span className='co'>colors : </span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={`${mainColor === color ? 'color-btn-single active' : 'color-btn-single'}`}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck  className='tick'/> : null}
            </button>
          ))}
        </div>
      </div>
      <div className='btn-container'>
        <div className='amount-btns'>
          <button type='button' className='amount-btn' onClick={decrease}>
            <FaMinus />
          </button>
          <h2 className='amount'>{amount}</h2>
          <button type='button' className='amount-btn' onClick={increase}>
            <FaPlus />
          </button>
        </div>
        <Link
          to='/cart'
          className='add-btn'
          onClick={handleAddToCart}
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;


// // src/components/AddToCart.scss
// .add-to-cart {
//     .colors {
//       // Your color button styles
//     }
//     .btn-container {
//       .amount-btns {
//         display: grid;
//         width: 140px;
//         justify-items: center;
//         grid-template-columns: repeat(3, 1fr);
//         align-items: center;
  
//         .amount-btn {
//           background: transparent;
//           border-color: transparent;
//           cursor: pointer;
//           padding: 1rem 0;
//           width: 2rem;
//           height: 1rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
  
//         .amount {
//           margin-bottom: 0;
//         }
//       }
//     }
//   }
  