// react
import { ChangeEvent, FC, useState } from "react";
// styles
import styles from "./TodoForm.module.scss";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useDispatch } from "react-redux";
import { taskActionCreators } from "@/enteties/task/model/actionCreators/taskActionCreators";
import { nanoid } from "nanoid";

interface TodoFormProps {}

export const TodoForm: FC<TodoFormProps> = ({}) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onTaskAddClick = () => {
    dispatch(
      taskActionCreators.addTask({
        completed: false,
        id: nanoid(),
        title: text,
      })
    );
    setText("");
  };

  return (
    <div className={styles.TodoForm}>
      <Input
        value={text}
        type="text"
        onChange={onTextChange}
        placeholder="Enter task"
      />
      <Button onClick={onTaskAddClick}>+</Button>
    </div>
  );
};
