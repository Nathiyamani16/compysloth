import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const ButtonCart = ({stock}) => {
    const [quantity, setQuantity] = useState(1);

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
    return (
        <div>
            <div className='btn-container'>
                <div className='am-btns'>
                    <button type='button' className='am-btn'
                        onClick={decrease}
                    >
                        <FaMinus />
                    </button>
                    <h2 className='am'>{quantity}</h2>
                    <button type='button' className='am-btn' onClick={increase}>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ButtonCart
