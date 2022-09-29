import { Component, createRef } from "react";
import qs from "query-string";
import NewsSearchForm from "../components/NewsSearchForm/NewsSearchForm";
import NewsList from "../components/NewsList/NewsList";
import PagePaginator from "../components/PagePaginator/PagePaginator";
import { getSearchNewsApi } from "../utils/newsApi";

class SearchNewsPage extends Component {
  state = {
    news: [],
  };

  queryRef = createRef(null);
  pageRef = createRef(null);

  componentDidMount() {
    const { search } = this.props.location;
    const { page, query } = qs.parse(search);
    if (page && query) {
      this.getNews();
    }
  }

  componentDidUpdate() {
    const { location } = this.props;
    const { search } = location;
    const { page, query } = qs.parse(search);

    if (
      query &&
      (query !== this.queryRef.current || page !== this.pageRef.current)
    ) {
      this.queryRef.current = query;
      this.pageRef.current = page;
      this.getNews();
    }
  }

  getNews = () => {
    const { setIsLoading, location } = this.props;
    const { page, query } = qs.parse(location.search);
    setIsLoading(true);
    getSearchNewsApi(query, page)
      .then((data) => this.setState({ news: data.articles }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  render() {
    return (
      <>
        <NewsSearchForm setQuery={this.setQuery} />
        <NewsList news={this.state.news} />
        <PagePaginator />
      </>
    );
  }
}

export default SearchNewsPage;
