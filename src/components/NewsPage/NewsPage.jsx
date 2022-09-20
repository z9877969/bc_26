import { Component } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import Modal from "../Modal/Modal";
// import news from "../../data/news.json";
import { searchNews } from "../../utils/newsApi";

// class ErrorBoundary extends Component {
//   state = { hasError: false };

//   componentDidCatch(error, info) {
//     // Якщо метод був викликаний, отже, є помилка!
//     // Встановлюємо стан
//     this.setState({ hasError: true });
//     // Також можна надіслати звіт про помилку вашому аналітичному сервісу
//     // logErrorToMyService(error, info);
//   }

//   render() {
//     // Якщо є помилка...
//     if (this.state.hasError) {
//       // Рендеримо fallback UI
//       return (
//         <h1 style={{ paddingTop: "100px" }}>
//           Something went wrong, please try again later :(
//         </h1>
//       );
//     }

//     // Якщо все ок, рендеримо дітей
//     return this.props.children;
//   }
// }

const URL =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6";

class NewsPage extends Component {
  state = {
    newsList: [],
    isLoading: false,
    error: null,
    page: 1, // 7 -> 1
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

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }

  // render to DOM

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setNews();
    }

    if (prevState.newsList !== this.state.newsList && this.state.page !== 1) {
      // window.scrollTo({
      //   top: snapshot - 140,
      //   behavior: "smooth",
      // });

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
        {/* <ErrorBoundary> */}
        <NewsList news={newsList} toggleModal={this.toggleModal} />
        {this.state.isLoading && <h1>Loading...</h1>}
        {newsList.length > 0 && <Button changePage={this.changePage} />}
        {isModalOpen && <Modal {...modalData} toggleModal={this.toggleModal} />}
        {/* </ErrorBoundary> */}
      </>
    );
  }
}

export default NewsPage;
