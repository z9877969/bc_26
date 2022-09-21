import { Component } from "react";
import s from "./SearchForm.module.scss";

class SearchForm extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeQuery(this.state.input);
    // fetch().then(data => this.setState({data}))
  };

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          name={"input"}
          value={this.state.input}
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
