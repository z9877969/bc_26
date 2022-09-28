import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCountryNews } from "../../utils/newsApi";
import NewsList from "../NewsList/NewsList";

const CountryNewsList = () => {
  const { country } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (!country) return;
    getCountryNews(country)
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, [country]);
  
  return <NewsList news={news} />;
};

export default CountryNewsList;
