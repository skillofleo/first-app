import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

function Counter() {
    
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
      <div>
        {count}
        <br/>
        <button onClick={() => dispatch('increment')}>+</button>
        <button onClick={() => dispatch('decrement')}>-</button>
        <button onClick={() => dispatch('reset')}>reset</button>
        <br/>
        {count2}
        <br/>
        <button onClick={() => dispatch2('increment')}>+</button>
        <button onClick={() => dispatch2('decrement')}>-</button>
        <button onClick={() => dispatch2('reset')}>reset</button>
      </div>
    );
}

export default Counter;
