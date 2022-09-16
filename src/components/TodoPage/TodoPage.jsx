import { Component } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: todoList,
    priorityFilter: "all",
  };

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
    const { priorityFilter } = this.state;
    const filteredTodo = this.filterTodo();
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <select
          name="priorityFilter"
          value={priorityFilter}
          onChange={this.handleFilterChange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
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
