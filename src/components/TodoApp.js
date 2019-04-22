import React from "react";
// import React, { useReducer } from "react";

// import { initialState, reducer } from "../reducers/todo.reducer.js";

import Todo from "./Todo.js";
import AddTodo from "./AddTodo.js";

const TodoApp = ({state, dispatch}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <h1>{state.counter}</h1>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />

    {state.todos.map((t,k) => (
      <Todo
        key={k}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
        edit={text => dispatch({type: "edit", id: t.id, text: text})}
      />
    ))}
  </>);
}
export default TodoApp;