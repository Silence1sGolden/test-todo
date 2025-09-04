import style from "./Todos.module.scss";
import { Actions } from "../Actions";
import { TasksList } from "../TasksList";
import { CreateTask } from "../CreateTask";

export function Todos() {
  return (
    <>
      <Actions />
      <div className={style.shadow}>
        <CreateTask />
        <TasksList />
      </div>
    </>
  );
}
