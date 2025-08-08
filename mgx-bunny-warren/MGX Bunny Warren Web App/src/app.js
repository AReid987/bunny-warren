// src/app.js
import React from 'react';
import { abc } from './abc';

function App() {
  return (
    <div>
      <h1>{abc.greet('World')}</h1>
      <p>Sum of 2 and 3 is {abc.add(2, 3)}</p>
    </div>
  );
}

export default App;