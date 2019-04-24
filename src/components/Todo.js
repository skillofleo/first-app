import React, {useState} from "react";

const Todo = ({ todo, remove, edit }) => {
  
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  const [newText, setNewText] = useState(todo.text);
  return (
    <div className="Todo">
      {mode === "list"
        ? <>
          <span className="TodoText">{todo.text}</span>
          <button className="RemoveTodo" onClick={remove}>Remove</button>
          <button className="EditTodo" onClick={() => setMode("edit")}>Edit</button>
        </>
        : <>
          <input placeholder={text}  onChange={e => setText(e.target.value)} className="EditTodoInput" />
          <button className="EditTodoSave" onClick={e => {
            if(newText.length>0){
              edit(text);
              setText(newText);
            }
             setMode("list");}}>Save</button>
          <button className="EditTodoCancel" onClick={() => setMode("list")}>Cancel</button>
        </>}
    </div>
  );
}

export default Todo;