

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "add": {
        console.info(`add todo`);
      const newTodo = {
        id: state.todos.length+1,
        text: action.text
      };
      const newTodos = [...state.todos, newTodo];

      return {
        ...state,
        todos: newTodos
      };
    }
    case "edit": {
      console.info(`edit todo`);
      const idx = state.todos.findIndex(t => t.id === action.id);
      const todo = Object.assign({}, state.todos[idx]);
      todo.text = action.text;
      const todos = Object.assign([], state.todos);
      todos.splice(idx, 1, todo);
      return {
        ...state,
        todos: todos
      };
    }
    case "remove": {
      console.info(`remove todo`);
      const idx = state.todos.findIndex(t => t.id === action.id);
      const todos = Object.assign([], state.todos);
      todos.splice(idx, 1);
      return {
        ...state,
        todos: todos
      };
    }
    case "counter+":{
        console.log(`counter ++`)
        return {...state,counter: state.counter+1};
    }
    case "counter-":{
        console.log(`counter --`)
        return {...state,counter: state.counter-1};
    }
    default:
      return {...state};
  }
};
