import { getFilter, getTasks } from "../../slices/tasks";
import { useSelector } from "../../store/store";
import { Task } from "../Task";
import style from "./TasksList.module.scss";

export function TasksList() {
  const filter = useSelector(getFilter);
  const tasks = useSelector(getTasks);

  return (
    <ul className={style.tasksList}>
      {filter === "all" &&
        tasks.map((item) => <Task key={item.id} task={item} />)}
      {filter === "active" &&
        tasks
          .filter((item) => !item.checked)
          .map((item) => <Task key={item.id} task={item} />)}
      {filter === "completed" &&
        tasks
          .filter((item) => item.checked)
          .map((item) => <Task key={item.id} task={item} />)}
    </ul>
  );
}
