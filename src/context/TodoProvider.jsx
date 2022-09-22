import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useLocalStorage("todo", []);

  const addTodo = (newTodo) => {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const changeTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      ),
    }));
  };

  return (
    <TodoContext.Provider
      value={{ todo, addTodo, removeTodo, changeTodoStatus }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
