import  { useState } from 'react';
import "../productImg/productimg.scss"
const ProductImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <section className='product-images'>
      <img src={main.url} alt='image-first' className='main first-img' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active3' : ''} galery-img`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
