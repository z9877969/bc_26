import { createSelector } from "@reduxjs/toolkit";

export const getTodoItems = (state) => state.todo.items;
export const getFilter = (state) => state.todo.filter;
export const getTheme = (state) => state.todo.theme;
export const getIsTodoEmpty = (state) => !getTodoItems(state).length;
export const getEditedItem = (state) => state.todo.editedItem;

// export const getFilteredTodo = (state) => {
//   const todo = getTodoItems(state);
//   const filter = getFilter(state);

//   if (filter === "all") return todo; // link1 | link1
//   return todo.filter((el) => el.priority === filter); // link1 | link2
// };

export const getFilteredTodo = createSelector(
  [getTodoItems, getFilter],
  (todo, filter) => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }
);

// {
//   const nextItems = getTodoItems(state);
//   const nextFilter = getFilter(state);
//   let value;
//   let items = nextItems;
//   let filter = nextFilter;
//   if (nextItems !== items || nextFilter !== filter) {
//     value = ((items, filter) => {})();
//     return value;
//   }
//   return value;
// }
