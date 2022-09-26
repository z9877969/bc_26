import SearchForm from "../components/SearchForm/SearchForm";
import News from "../components/News/News";
import { useState } from "react";

const NewsPage = () => {
  const [query, setQuery] = useState("");

  const changeQuery = (query) => {
    setQuery(query);
  };

  return (
    <div style={{ position: "relative" }}>
      <SearchForm changeQuery={changeQuery} />
      <News query={query} />
    </div>
  );
};

export default NewsPage;
