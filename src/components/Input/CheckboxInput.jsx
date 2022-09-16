import s from "./CheckboxInput.module.scss";

const CheckboxInput = ({ name, value, id, label }) => {
  return (
    <>
      <input
        className={s.input}
        name={name}
        value={value}
        type="checkbox"
        id={id}
      />
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

CheckboxInput.propTypes = {
  
}

export default CheckboxInput;
