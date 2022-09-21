import { useState, useEffect } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import s from "./TodoPage.module.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";


const TodoPage = () => {
  // state = {
  //   todo: [],
  //   priorityFilter: "all",
  // };

  // componentDidMount() {
  //   this.setState({
  //     todo: JSON.parse(localStorage.getItem("todo")) || todoList,
  //   });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todo !== this.state.todo) {
  //     localStorage.setItem("todo", JSON.stringify(this.state.todo));
  //   }
  // }

  // const [todo, setTodo] = useState(
  //   JSON.parse(localStorage.getItem("todo")) || []
  // );
  const [todo, setTodo] = useLocalStorage("todo",[]);
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const addTodo = (newTodo) => {
    // this.setState((prev) => ({
    //   todo: [...prev.todo, newTodo],
    // }));
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  const removeTodo = (id) => {
    // this.setState((prev) => ({
    //   todo: prev.todo.filter((el) => el.id !== id),
    // }));
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (e) => {
    // this.setState({ priorityFilter: e.target.value });
    setPriorityFilter(e.target.value);
  };

  const filterTodo = () => {
    if (priorityFilter === "all") return todo;
    const filteredTodo = todo.filter((el) => el.priority === priorityFilter);
    return filteredTodo;
  };

  const changeTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      ),
    }));
  };

  

  useEffect(() => {
    console.log(priorityFilter);
  }, [priorityFilter]);

  const filteredTodo = filterTodo();
  return (
    <>
      <ToDoForm addTodo={addTodo} priorityFilter={priorityFilter} />
      <div className={s.priorityFilter}>
        <p className={s.title}>Priority filter:</p>
        <select
          className={s.select}
          name="priorityFilter"
          value={priorityFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  );
};

export default TodoPage;
