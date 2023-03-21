import { useContext } from "react";
import cx from "classnames";
import Todo from "./Todo";
import { observer } from "mobx-react-lite";
import { TodoContext } from "../store";

// interface PropsType {
//   todoStore: TodoStore;
// }

const TodoList = () => {
  const todoStore = useContext(TodoContext)
  const { todos } = todoStore

  return (
    <ul className="todo-list">
      {todoStore.todos && todoStore.todos.length ? (
        <div key={1}>
          {todos.map((todo, index) => (
            <Todo
              todo={todo}
              index={index + 1}
              key={todo.id}
            />
          ))}
        </div>
      ) : (
        <span className="todo-list__empty" key={2}>
          no todos data!
        </span>
      )}
    </ul>
  );
};

export default observer(TodoList);
