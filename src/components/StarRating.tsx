// components/StarRating.tsx
import React from 'react';
import StarIcon from './StarIcon';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} filled={index < rating} />
  ));

  return <div className="flex ">{starIcons}</div>;
};

export default StarRating;
