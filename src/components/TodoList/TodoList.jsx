import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getFilteredTodo } from "../../redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import a from "./TodoListAnimation.module.scss";

const classNames = {
  enter: a.qweEnter,
  enterActive: a.qweEnterActive,
  exit: a.qweExit,
  exitActive: a.qweExitActive,
};

const TodoList = () => {
  const filteredTodo = useSelector(getFilteredTodo);

  return (
    <>
      <TransitionGroup component={"ul"} className={s.container}>
        {filteredTodo.map((todoItem) => (
          <CSSTransition
            key={todoItem.id}
            timeout={300}
            classNames={classNames}
          >
            <TodoItem key={todoItem.id} {...todoItem} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default TodoList;
