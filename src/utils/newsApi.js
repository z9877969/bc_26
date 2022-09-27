// https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6
import axios from "axios";

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";
axios.defaults.baseURL = "https://newsapi.org/v2";

export const getSearchNewsApi = async (query, page) => {
  try {
    const { data } = await axios.get("/everything", {
      params: {
        q: query,
        page,
        pageSize: 10,
        apiKey: API_KEY,
      },
    });
    return data; // promiseResult with status fullfield
  } catch (error) {
    console.log(error);
    throw error;
  }
};
