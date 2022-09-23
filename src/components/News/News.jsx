import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import Modal from "../Modal/Modal";
import { searchNews } from "../../utils/newsApi";
import { useCallback } from "react";
import { useApi } from "../../hooks/useApi";

const News = ({ query }) => {
  // const [newsList, setNewsList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const {
    data: newsList,
    error,
    isLoading,
    getDataApi,
    resetError,
    setData,
    setError,
  } = useApi([], searchNews);
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState(null); // null | object

  const isFirstRenderRef = useRef(true); // {current: true}

  const setNews = async () => {
    try {
      const news = await getDataApi({ query, page });
      if (!news.length) {
        setData(news);
        setError({ message: "Response is empty", status: "warning" });
      }
      setData((prev) => (page === 1 ? news : [...prev, ...news]));
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  const changePage = () => {
    setPage((prev) => prev + 1);
  };

  const toggleModal = useCallback((modalData = null) => {
    setModalData(modalData);
  }, []);

  useEffect(() => {
    if (!isFirstRenderRef.current) {
      if (!query) {
        setError({
          message: "Search is empty",
          status: "error",
        });
        return;
      }
      if (page === 1) {
        setNews();
        return;
      }
      setPage(1); // 7 -> 1
    }
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    if (!isFirstRenderRef.current) {
      if (!query) {
        return;
      }
      setNews();
    } else {
      isFirstRenderRef.current = false;
    }
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    // console.log(error); // {message: 'Search is empty', status: 'error'}
    error &&
      toast[error.notify?.status || error.status](
        error.notify?.message || error.message
      );
    error && resetError(null);
  }, [error, resetError]);

  return (
    <>
      <NewsList news={newsList} toggleModal={toggleModal} />
      {isLoading && <h1>Loading...</h1>}
      {newsList.length > 0 && <Button changePage={changePage} />}
      {modalData && <Modal {...modalData} toggleModal={toggleModal} />}
      <ToastContainer />
    </>
  );
};

export default News;
