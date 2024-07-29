
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../Redux/cartSlice"
import './AddToCart.scss';

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, color: mainColor, amount, product }));
  };

  return (
    <div className='add-to-cart'>
      <div className='colors'>
        <span>colors : </span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
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
          className='btn'
          onClick={handleAddToCart}
        >
          add to cart
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
  