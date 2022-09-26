import axios from "axios";

export const pageSize = 6;
const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

axios.defaults.baseURL = "https://newsapi.org/v2"

export const getSearchNews = ({ query, page }) => {
  return axios
    .get("/everything", {
      params: {
        q: query,
        page,
        pageSize,
        apiKey: API_KEY,
      },
    })
    .then(({ data }) => data.articles);
};

export const getTopCountryNews = (country) => {
  return axios
    .get("/top-headlines", {
      params: {
        country,
        pageSize,
        apiKey: API_KEY,
      },
    })
    .then((response) => response.data.articles); // news
};
