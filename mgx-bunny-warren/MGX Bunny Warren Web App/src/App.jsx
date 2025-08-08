import React, { useState } from 'react';
import GameRoom from './GameRoom';

const App = () => {
  const [roomId, setRoomId] = useState('');

  const handleJoinGame = () => {
    if (roomId) {
      // Redirect or join the game room
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bunny Warren</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleJoinGame}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Join Game
        </button>
      </div>
      {roomId && <GameRoom roomId={roomId} />}
    </div>
  );
};

export default App;