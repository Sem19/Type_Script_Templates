// react
import { FC } from "react";
// styles
import styles from "./TodoCount.module.scss";
import { useSelector } from "react-redux";
import { getTaskState } from "@/enteties/task/model/selectors/taskSelectors";

interface TodoCountProps {}

export const TodoCount: FC<TodoCountProps> = ({}) => {
  const { tasks } = useSelector(getTaskState);

  const taskCount = tasks.length;

  return <div className={styles.TodoCount}>you have a {taskCount} tasks</div>;
};
