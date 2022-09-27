import { useState } from "react";

const NewsSearchForm = ({setSearch}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearch({ query: searchInput, page: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchInput"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default NewsSearchForm;
