import { Component } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import s from "./TodoPage.module.scss";

class TodoPage extends Component {
  static defaultProps = {
    priorityFilter: "all",
  };

  state = {
    todo: [], //todoList
    priorityFilter: "all",
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      todo: JSON.parse(localStorage.getItem("todo")) || todoList,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
  }

  addTodo = (newTodo) => {
    this.setState((prev) => ({
      todo: [...prev.todo, newTodo],
    }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.filter((el) => el.id !== id),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ priorityFilter: e.target.value });
  };

  filterTodo = () => {
    const { todo, priorityFilter } = this.state;
    if (priorityFilter === "all") return todo;
    const filteredTodo = todo.filter((el) => el.priority === priorityFilter);
    return filteredTodo;
  };

  changeTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      ),
    }));
  };

  render() {
    console.log("RENDER_TodoPage");
    const { priorityFilter } = this.state;
    const filteredTodo = this.filterTodo();
    return (
      <>
        <button
          type="button"
          onClick={() =>
            this.setState((prev) => ({ isLoading: !prev.isLoading }))
          }
        >
          Start is loading
        </button>
        {this.state.isLoading && <h1>Loading...</h1>}
        <ToDoForm addTodo={this.addTodo} priorityFilter={priorityFilter} />
        <div className={s.priorityFilter}>
          <p className={s.title}>Priority filter:</p>
          <select
            className={s.select}
            name="priorityFilter"
            value={priorityFilter}
            onChange={this.handleFilterChange}
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <ToDoList
          todo={filteredTodo}
          removeTodo={this.removeTodo}
          changeTodoStatus={this.changeTodoStatus}
        />
      </>
    );
  }
}

export default TodoPage;
