// react
import { FC } from "react";
// styles
import styles from "./Todo.module.scss";
import { TodoTasks } from "../TodoTasks/TodoTasks";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoCount } from "../TodoCount/TodoCount";
import { TodoClearAllButton } from "../TodoClearAllButton/TodoClearAllButton";

interface TodoProps {}

export const Todo: FC<TodoProps> = ({}) => {
  return (
    <div className={styles.Todo}>
      <div>Todo List</div>
      <TodoForm />
      <TodoTasks />
      <div className={styles.bottom}>
        <TodoCount />
        <TodoClearAllButton />
      </div>
    </div>
  );
};
