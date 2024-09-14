// react
import { taskActionCreators } from "@/enteties/task/model/actionCreators/taskActionCreators";
import { getTaskState } from "@/enteties/task/model/selectors/taskSelectors";
import { Button } from "@/shared/ui/Button";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

interface TodoClearAllButtonProps {}

export const TodoClearAllButton: FC<TodoClearAllButtonProps> = ({}) => {
  const { tasks } = useSelector(getTaskState);

  const dispatch = useDispatch();

  const onClearAllClick = () => {
    dispatch(taskActionCreators.clearAllTasks());
  };

  const isTaskExist = tasks.length;

  return isTaskExist ? (
    <Button onClick={onClearAllClick}>Clear all</Button>
  ) : null;
};
