import React, { useReducer,useContext } from "react";
import { AppContext } from "../ContextProvider";

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
    
    // const [count, dispatch] = useReducer(reducer, initialState);
    const {state,dispatch} = useContext(AppContext)
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
      <div>
        {state.counter}
        <br/>
        <button onClick={() => dispatch({type: "counter+"})}>+</button>
        <button onClick={() => dispatch({type:'counter-'})}>-</button>
        {/* <button onClick={() => dispatch('reset')}>reset</button> */}
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
