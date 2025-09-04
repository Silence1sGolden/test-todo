import { ChangeEvent, KeyboardEvent, useState } from "react";
import style from "./CreateTask.module.scss";
import { useDispatch } from "../../store/store";
import { addTask } from "../../slices/tasks";

export function CreateTask() {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const onCreate = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      dispatch(addTask(value));
      setValue("");
    }
  };

  return (
    <input
      className={style.taskCreate}
      type="text"
      placeholder="What need to be done"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      onKeyDown={onCreate}
      value={value}
    />
  );
}
