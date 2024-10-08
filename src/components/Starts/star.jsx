import {} from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import './stars.scss';

const Stars = ( {stars, reviews} ) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className='star-con'>
      <div className='star'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
