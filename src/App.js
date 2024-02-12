import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className='button-wrapper'>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
