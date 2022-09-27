import SearchForm from "../components/SearchForm/SearchForm";
import News from "../components/News/News";
import { useLocation } from "react-router-dom";

const NewsPage = () => {

  const location = useLocation();

  console.log("location :>> ", location.search);

  return (
    <div style={{ position: "relative" }}>
      <SearchForm />
      <News />
    </div>
  );
};

export default NewsPage;

// "?q=pumb&page=25" -> {q: "pumb", page: "25"}
