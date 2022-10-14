import axios from "axios";

// для ДЗ
// const setToken = (token) => axios.defaults.headers.common.Authorization = `Bearer ${token}`
// const unsetToken = () => axios.defaults.headers.common.Authorization = ""

const API_KEY = "AIzaSyBNDY0e0QtOlVVeeGDiGbZK1iRiNn2iPSY";

const baseUrl = {
  DB: "https://bc-26-9c7a4-default-rtdb.firebaseio.com",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  REFRESH: "https://securetoken.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

// "https://<DATABASE_NAME>.firebaseio.com/users/localId/todo.json?auth=<ID_TOKEN>"
export const addTodoApi = ({ todo, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .post(`/users/${localId}/todo.json`, todo, {
      params: {
        auth: idToken,
      },
      // для ДЗ
      // headers: {
      //   Authorization: `Bearer ${idToken}`
      // }
    })
    .then((res) => ({ ...todo, id: res.data.name }));
};

export const getTodoApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .get(`/users/${localId}/todo.json`, {
      params: {
        auth: idToken,
      },
    })
    .then((res) =>
      Object.entries(res.data).map(([id, data]) => {
        return {
          ...data,
          id,
        };
      })
    );
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .delete(`users/${localId}/todo/${id}.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(() => id);
};

export const updateTodoApi = ({ id, ...todo }) => {
  return axios
    .patch(`/todo/${id}.json`, todo)
    .then((res) => ({ ...res.data, id }));
};

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
export const registerUserApi = (dataForm) => {
  setBaseUrl(baseUrl.AUTH);
  return axios.post(`/accounts:signUp?key=${API_KEY}`, {
    ...dataForm,
    returnSecureToken: true,
  });
};

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
export const loginUserApi = (dataForm) => {
  setBaseUrl(baseUrl.AUTH);
  return axios.post(
    "/accounts:signInWithPassword",
    {
      ...dataForm,
      returnSecureToken: true,
    },
    {
      params: {
        key: API_KEY,
      },
    }
  );
};

// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]
export const updateUserInfoApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:lookup",
      { idToken },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};
// https://securetoken.googleapis.com/v1/token?key=[API_KEY]
export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(baseUrl.REFRESH);
  return axios.post(
    "/token",
    {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    },
    {
      params: {
        key: API_KEY,
      },
    }
  );
};
