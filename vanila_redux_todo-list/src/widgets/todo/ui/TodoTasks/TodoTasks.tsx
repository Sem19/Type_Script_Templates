// react
import { getTaskState } from "@/enteties/task/model/selectors/taskSelectors";
import { TaskItemList } from "@/enteties/task/ui/TaskItemList/TaskItemList";
import { FC } from "react";
import { useSelector } from "react-redux";

interface TodoTasksProps {}

export const TodoTasks: FC<TodoTasksProps> = ({}) => {
  const { tasks } = useSelector(getTaskState);

  return <TaskItemList tasks={tasks} />;
};
