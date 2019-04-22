export const initialState = {
    counter: 0,
    todos: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        {
         
          const newTodo = {
            id: state.todos.lenght++,
            text: action.text,
          };
          const newTodos = [...state.todos, newTodo]
          const newCounter = newTodos.length;
          return {
            counter: newCounter,
            todos:newTodos ,
          };
        }
      case "edit":
        {
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todo = Object.assign({}, state.todos[idx]);
          todo.text = action.text;
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1, todo);
          return {
            counter: state.counter,
            todos: todos,
          };
        }
      case "remove":
        {
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1);
          return {
            counter: todos.length,
            todos: todos,
          };
        }
      default:
        return state;
    }
  };