import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";
import Modal from "../components/Modal/Modal";

class App extends Component {
  state = {
    query: "",
  };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="App">
        <SearchForm changeQuery={this.changeQuery}/>
        <NewsPage query={this.state.query} />
        
      </div>
    );
  }
}

export default App;
