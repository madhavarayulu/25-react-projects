import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseMove(getCurrentIndex) {
    setHoverRating(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHoverRating(rating);
  }
  return (
    <div>
      {[...Array(noOfStars)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            color={ratingValue <= (hoverRating || rating) ? '#ffc107' : '#ccc'}
            onClick={() => handleClick(ratingValue)}
            onMouseMove={() => handleMouseMove(ratingValue)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
