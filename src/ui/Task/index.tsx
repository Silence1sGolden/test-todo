import style from "./Task.module.scss";
import { useDispatch } from "../../store/store";
import { setCheckTask } from "../../slices/tasks";

export type TTask = {
  id: string;
  checked: boolean;
  text: string;
};

type TTaskProps = {
  task: TTask;
};

export function Task({ task }: TTaskProps) {
  const dispatch = useDispatch();

  const onClickCheck = () => {
    dispatch(setCheckTask(task.id));
  };

  return (
    <li className={style.task}>
      <span
        className={[style.check, task.checked && style["checked"]]
          .filter(Boolean)
          .join(" ")}
        onClick={onClickCheck}
      />
      <span className={style.text}>{task.text}</span>
    </li>
  );
}
