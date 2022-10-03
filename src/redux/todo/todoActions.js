import { TODO_ADD, TODO_FILTER, TODO_REMOVE } from "./todoConstants";

export const addTodo = (todo) => {
  return {
    type: TODO_ADD,
    payload: todo,
  };
};

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  payload: id,
});

export const filterTodo = (value) => ({
  type: TODO_FILTER,
  payload: value,
});
