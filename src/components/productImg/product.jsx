import React, { useState } from 'react';
// import './ProductImages.scss';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <section className='product-images'>
      <img src={main.url} alt='main' className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : ''}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
