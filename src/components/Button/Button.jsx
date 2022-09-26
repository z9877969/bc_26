import s from "./Button.module.scss";

const Button = ({ updatePage }) => {
  return (
    <button className={s.btn} type="button" onClick={updatePage}>
      More
    </button>
  );
};

export default Button;
