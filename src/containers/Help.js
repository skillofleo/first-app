import React,{useReducer} from 'react'
import TodoApp from '../components/TodoApp';
import { initialState, reducer } from "../reducers/todo.reducer.js";

const Docs =()=> {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state.counter}</h1>

           <TodoApp state={state} dispatch={dispatch}/>
           
        </div>

    )
}

export default Docs