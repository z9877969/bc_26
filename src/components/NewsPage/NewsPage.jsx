import SearchForm from "../SearchForm/SearchForm";
import News from "../News/News";
import { useState } from "react";

const NewsPage = () => {
  // state = {
  //   query: "",
  // };

  const [query, setQuery] = useState("");

  const changeQuery = (query) => {
    // this.setState({ query });
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
