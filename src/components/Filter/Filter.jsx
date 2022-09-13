import CheckboxInput from "../Input/CheckboxInput";
import s from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={s.filter}>
      <ul className={s.list}>
        <li className={s.item}>
          <CheckboxInput name="filter" value="apple" id="apple" label="Apple" />
        </li>
        <li className={s.item}>
          <CheckboxInput
            name="filter"
            value="xiaomi"
            id="xiaomi"
            label="Xiaomi"
          />
        </li>
        <li className={s.item}>
          <CheckboxInput
            name="filter"
            value="samsung"
            id="samsung"
            label="Samsung"
          />
        </li>
        <li className={s.item}>
          <CheckboxInput name="filter" value="zte" id="zte" label="Zte" />
        </li>
        <li className={s.item}>
          <CheckboxInput
            name="filter"
            value="huawei"
            id="huawei"
            label="Huawei"
          />
        </li>
      </ul>
    </div>
  );
};

export default Filter;
