import React, { useContext } from "react";
import cx from "classnames";
import { observer } from "mobx-react-lite";
import { TodoContext } from "../store";

interface ITodoItem {
  id?: number;
  content: string;
  completed: boolean;
}

interface IPropsType {
  todo: ITodoItem;
  index: number;
}

function Todo({ todo, index }: IPropsType) {
  const todoStore = useContext(TodoContext)
  const { toggleTodo } = todoStore
  return (
    <li
      onClick={() => toggleTodo(todo.id || 0)}
      className={cx("todo-item", {
        "todo-item--completed": todo.completed,
      })}
      title={todo.completed ? "标记为未完成" : "标记为已完成"}
    >
      <input
        className="todo-item__field"
        checked={todo.completed}
        type="checkbox"
        onChange={(e) => {
          // e.preventDefault()
        }}
      ></input>
      {`${index}：${todo.completed ? "👌" : "👋"}${todo.content}`}
    </li>
  );
}

export default observer(Todo);
