import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "../../context/LoaderProvider";
import { getCountryNews } from "../../utils/newsApi";
import NewsList from "../NewsList/NewsList";

const CountryNewsList = ({ match }) => {
  const setIsLoading = useContext(LoaderContext);

  const [news, setNews] = useState([]);

  const { country } = match.params;

  useEffect(() => {
    setIsLoading(true);
    getCountryNews(country)
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [country, setIsLoading]);

  return <NewsList news={news} />;
};

export default CountryNewsList;
