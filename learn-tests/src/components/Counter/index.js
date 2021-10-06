import { useState } from 'react';

import './count.css';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <span>Content counter is: {count}</span>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </div>
  );
};
