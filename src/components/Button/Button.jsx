import s from "./Button.module.scss";

const Button = ({ changePage }) => {
  return (
    <button className={s.btn} type="button" onClick={changePage}>
      More
    </button>
  );
};

export default Button;
