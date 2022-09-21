import { Component } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import Modal from "../Modal/Modal";
import { searchNews } from "../../utils/newsApi";


class News extends Component {
  state = {
    newsList: [],
    isLoading: false,
    error: null,
    page: 1, 
    query: "",
    isModalOpen: false,
    modalData: null,
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.query !== state.query) {
      return { query: nextProps.query, page: 1, newsList: [] };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setNews();
    }

    if (prevState.newsList !== this.state.newsList && this.state.page !== 1) {
      window.scrollBy({
        top: window.innerHeight - 76,
        behavior: "smooth",
      });
    }
  }

  setNews = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    searchNews({ query, page })
      .then((news) =>
        this.setState((prev) => ({
          newsList: [...prev.newsList, ...news],
        }))
      )
      .catch((err) => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  toggleModal = (modalData = null) => {
    this.setState((prev) => ({
      isModalOpen: !prev.isModalOpen,
      modalData,
    }));
  };

  render() {
    const { newsList, isModalOpen, modalData } = this.state;
    return (
      <>
        <NewsList news={newsList} toggleModal={this.toggleModal} />
        {this.state.isLoading && <h1>Loading...</h1>}
        {newsList.length > 0 && <Button changePage={this.changePage} />}
        {isModalOpen && <Modal {...modalData} toggleModal={this.toggleModal} />}
      </>
    );
  }
}

export default News;
