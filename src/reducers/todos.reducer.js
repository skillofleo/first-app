 
  export const reducerTodo = (state, action) => {
    switch (action.type) {
      case "add":
        {
          
          const newTodo = {
            id: state.todos.lenght++,
            text: action.text,
          };
          const newTodos = [...state.todos, newTodo]
         
          return {
           
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
           
            todos: todos,
          };
        }
      case "remove":
        {
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1);
          return {
           
            todos: todos,
          };
        }
      default:
        return state;
    }
  };