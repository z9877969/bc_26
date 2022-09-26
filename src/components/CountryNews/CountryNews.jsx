import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopCountryNews } from "../../utils/newsApi";
import NewsList from "../NewsList/NewsList";

const TopCountryNews = () => {
  const { country } = useParams();

  const [news, setNews] = useState([]);

  // console.log("params :>> ", params);
  useEffect(() => {
    getTopCountryNews(country)
      .then((news) => setNews(news))
      .catch((err) => console.log(err));
  }, [country]);

  return (
    <>
      <h1>ContryNews {country.toUpperCase()}</h1>
      <NewsList news={news} />
    </>
  );
};

export default TopCountryNews;
