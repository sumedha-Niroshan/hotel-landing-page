// components/StarIcon.tsx
import React from 'react';

interface StarIconProps {
  filled: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? '#FDBC7D' : 'none'}
      stroke="#6E706E"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.46L18.18 21.27L12 17.72L5.82 21.27L7 14.46L2 9.27L8.91 8.26L12 2z" />
    </svg>
  );
};

export default StarIcon;
