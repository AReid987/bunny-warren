import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Player from './Player';
import Card from './Card';

const GameRoom = ({ roomId }) => {
  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState({ currentTurn: '', board: [] });
  const socket = io('http://localhost:3000');

  useEffect(() => {
    socket.on('game_state_update', (newState) => {
      setGameState(newState);
    });

    socket.on('player_joined', (newPlayer) => {
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    });

    socket.on('player_left', (playerId) => {
      setPlayers((prevPlayers) => prevPlayers.filter(player => player.player_id !== playerId));
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const joinGame = (username) => {
    socket.emit('join_game', { roomId, username });
  };

  const playCard = (card) => {
    socket.emit('play_card', { roomId, card });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Game Room: {roomId}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Players:</h2>
        {players.map(player => (
          <Player key={player.player_id} player={player} />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold">Board:</h2>
        {gameState.board.map(card => (
          <Card key={card.card_id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default GameRoom;