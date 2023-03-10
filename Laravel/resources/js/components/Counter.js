import React, { useState } from "react";
import ReactDOM from 'react-dom';

export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(count + 1);
    notifyServer();
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(count -  1);
    notifyServer();
  };

    // Notifies the server about the change
  const notifyServer = () => {
    axios.post('/count', {
        message: 'Counter Updated!',
    })
}

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span> {count} </span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

if (document.getElementById('counter')) {
  ReactDOM.render(<Counter />, document.getElementById('counter'));
}

// if (document.getElementById('counter')) {
//     ReactDOM.render(<Counter />, document.getElementById('counter'));
// }
