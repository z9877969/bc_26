import { useState, useEffect } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import Modal from "../Modal/Modal";
import { getSearchNews } from "../../utils/newsApi";

const News = ({ query }) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  const updatePage = () => {
    setPage((page) => page + 1);
  };

  const toggleModal = (data = null) => {
    setModalData(data);
  };

  useEffect(() => {
    if (!query) return;
    const setSearchNews = () => {
      setIsLoading(true);
      getSearchNews({page, query})
        .then((articles) => {
          setNews((news) => (page === 1 ? articles : [...news, ...articles]));
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    };
    setSearchNews();
  }, [page, query]);

  return (
    <>
      <NewsList news={news} toggleModal={toggleModal} />

      {isLoading && <h1>Loading...</h1>}
      {news.length > 0 && <Button updatePage={updatePage} />}
      {modalData && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default News;
