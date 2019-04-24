import React, { useContext } from "react";
import TodoApp from "../components/TodoApp";
import { AppContext } from "../ContextProvider";

const Help = () => {
//   const [state, dispatch] = useReducer(AppReducer, InitialState);
  const {state,dispatch} = useContext(AppContext);

  return (
    <div>
      <TodoApp state={state} dispatch={dispatch} />
    </div>
  );
};

export default Help;
