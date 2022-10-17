import { createSelector } from "@reduxjs/toolkit";

export const getTodoItems = (state) => state.todo.items;
export const getFilter = (state) => state.todo.filter;
export const getTheme = (state) => state.todo.theme;
export const getIsTodoEmpty = (state) => !getTodoItems(state).length;
export const getEditedItem = (state) => state.todo.editedItem;
export const getIsLoading = (state) => state.todo.isLoading;

export const getFilteredTodo = createSelector(
  [getTodoItems, getFilter],
  (todo, filter) => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }
);
