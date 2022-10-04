import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("todo/add", (data) => {
  return {
    payload: { ...data, id: Date.now() },
  };
});
export const removeTodo = createAction("todo/remove");

export const changeFilter = createAction("todo/changeFilter");
