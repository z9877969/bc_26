import axios from "axios";

// 'https://bc-26-9c7a4-default-rtdb.firebaseio.com/todo/${id}.json'

axios.defaults.baseURL = "https://bc-26-9c7a4-default-rtdb.firebaseio.com";

export const addTodoApi = (todo) => {
  return axios
    .post("/todo.json", todo)
    .then((res) => ({ ...todo, id: res.data.name }));
};

export const getTodoApi = () => {
  return axios.get("/todo.json").then((res) =>
    Object.entries(res.data).map(([id, data]) => {
      return {
        ...data,
        id,
      };
    })
  );
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then(() => id);
};

export const updateTodoApi = ({ id, ...todo }) => {
  return axios
    .patch(`/todo/${id}.json`, todo)
    .then((res) => ({ ...res.data, id }));
};