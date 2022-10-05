import axios from "axios";

// 'https://bc-26-9c7a4-default-rtdb.firebaseio.com/todo.json'

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
