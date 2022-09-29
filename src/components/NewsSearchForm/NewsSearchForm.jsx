import { Component } from "react";
import { withRouter } from "react-router-dom";
import qs from "query-string";

class NewsSearchForm extends Component {
  state = {
    searchInput: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, location } = this.props;

    const queryString = qs.stringify({
      query: this.state.searchInput,
      page: 1,
    });

    history.push({
      ...location,
      search: queryString,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchInput"
          value={this.state.searchInput}
          onChange={(e) => this.setState({ searchInput: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default withRouter(NewsSearchForm);

// {
//   let h;
//   let l;
//   let m;

//   const wthRouter = (WrappedComponent) => {
//     return (props) => <WrappedComponent {...props} location={l} history={h} match={m} />;
//   };
// }
