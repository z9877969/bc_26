import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "../../redux/todo/todoSlice";
import s from "./PriorityFilter.module.scss";

const PriorityFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.todo.filter);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterTodo(value));
  };

  console.log("TodoFilter");

  return (
    <div className={s.priorityFilter}>
      <p className={s.title}>Priority filter:</p>
      <select
        onChange={handleChange}
        className={s.select}
        name="priorityFilter"
        value={filter}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default PriorityFilter;
