
export interface Action{
  type: string
  payload: any
}

const initialState = {
  todoList: [],
  todo: {}
};
export default function(state = initialState, action:Action) {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todoList: action.payload
      };
    case "ADD_TODO":
      console.log([action.payload].concat(state.todoList));
      return {
        ...state,
        todo:action.payload,
        todoList: [action.payload].concat(state.todoList)
      };
    default:
      return state;
  }
}