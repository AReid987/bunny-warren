import React from 'react';
import Card from './Card';

const Player = ({ player }) => {
  return (
    <div className="p-2 bg-white rounded shadow mb-2">
      <h3 className="text-lg font-medium">{player.username}</h3>
      <div className="flex space-x-2">
        {player.hand.map(card => (
          <Card key={card.card_id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Player;