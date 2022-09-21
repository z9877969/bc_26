import s from "./PriorityFilter.module.scss";

const PriorityFilter = () => {
  return (
    <div className={s.priorityFilter}>
      <p className={s.title}>Priority filter:</p>
      <select className={s.select} name="priorityFilter">
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default PriorityFilter;
