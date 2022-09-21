import axios from "axios";

export const searchNews = ({ query, page }) => {
  return axios
    .get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        page,
        pageSize: 10,
        apiKey: "42ee593af8484a5a82756cb35b09ccd6",
      },
    })
    .then(({ data }) => data.articles);
};

// export const searchNews = ({ query, page }) => {
//   return axios
//     .get("https://pixabay.com/api/", {
//       params: {
//         q: query,
//         page,
//         per_page: 10,
//         key: "13965574-3ae6669f35304ffc6cddc1b72",
//         image_type: "photo",
//       },
//     })
//     .then(({ data }) => data.hits);
// };
