import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSearchNewsApi } from "../utils/newsApi";
import NewsSearchForm from "../components/NewsSearchForm/NewsSearchForm";
import NewsList from "../components/NewsList/NewsList";
import PagePaginator from "../components/PagePaginator/PagePaginator";

const SearchNewsPage = () => {
  const [search, setSearch] = useSearchParams();
  const [news, setNews] = useState([]);

  const query = search.get("query");
  const page = search.get("page");

  useEffect(() => {
    if (!query) return;
    getSearchNewsApi(query, page).then((data) => setNews(data.articles));
  }, [query, page]);

  return (
    <>
      <NewsSearchForm setSearch={setSearch} />
      <NewsList news={news} />
      <PagePaginator setSearch={setSearch} query={query} page={page} />
    </>
  );
};

export default SearchNewsPage;
