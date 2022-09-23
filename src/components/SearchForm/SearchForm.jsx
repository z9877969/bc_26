import { useState } from "react";
import s from "./SearchForm.module.scss";

const SearchForm = ({ changeQuery }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeQuery(input);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name={"input"}
        value={input}
        placeholder="Search..."
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
