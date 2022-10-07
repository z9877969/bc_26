import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const updateDataObjToArr = (dataObj) =>
  Object.entries(dataObj).map(([id, data]) => {
    return {
      ...data,
      id,
    };
  });

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bc-26-9c7a4-default-rtdb.firebaseio.com/",
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todo.json",
      providesTags: ["Todo"],
      transformResponse: (responseData) => updateDataObjToArr(responseData),
    }),
    addTodo: builder.mutation({
      query: (dataForm) => ({
        url: "/todo.json",
        method: "POST",
        body: dataForm,
      }),
      invalidatesTags: ["Todo"],
      transformResponse: ({ name: id }, _, data) => {
        return { id, ...data };
      },
    }),
    removeTodo: builder.mutation({
      query: (id) => ({
        url: `/todo/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/todo/${id}.json`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} = todoApi;

// const o = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// // PUT
// {
//   a: 21,
//   b: 22
// }
// // PATCH
// {
//   a: 21,
//   b: 22
// }
