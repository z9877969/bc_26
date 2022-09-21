import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import News from "./News/News";

class NewsPage extends Component {
  state = {
    query: "",
  };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <SearchForm changeQuery={this.changeQuery} />
        <News query={this.state.query} />
      </>
    );
  }
}

export default NewsPage;
