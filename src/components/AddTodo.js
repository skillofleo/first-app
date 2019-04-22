import React, {useState} from "react";

const AddTodo = ({add}) => {
  const [text, setText] = useState("");
  return (
    <form className="AddTodo" onSubmit={(e) => {
      e.preventDefault();
      add(text); setText("")}}>
      <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
      <button className="AddTodoButton" type="submit">Add</button>
    </form>
  );
}

export default AddTodo;