import { Dispatch } from 'redux';
import {ToDo} from "../components/ListView";

export function getTodoList() {
  return (dispatch:Dispatch):void => {
    fetch("https://jsonplaceholder.typicode.com/todos",)
        .then(response => response.json())
        .then(json => dispatch({
              type:"GET_TODOS",
              payload:json
            })
        );
  };
}

export const addToDo = (todo:ToDo) => (dispatch:Dispatch):void  => {
  dispatch ({
    type:"ADD_TODO",
    payload: todo
  })
};