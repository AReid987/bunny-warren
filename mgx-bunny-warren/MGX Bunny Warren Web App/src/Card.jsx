import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="p-2 bg-blue-100 rounded shadow">
      <p className="text-sm">{card.type}</p>
      <p className="text-xs">{card.value}</p>
    </div>
  );
};

export default Card;