import clsx from "clsx";
import {
  clearCompleted,
  getFilter,
  getTasks,
  setFilterType,
  TFilter,
} from "../../slices/tasks";
import { useDispatch, useSelector } from "../../store/store";
import style from "./Actions.module.scss";

export function Actions() {
  const tasks = useSelector(getTasks);
  const type = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeType = (t: TFilter) => {
    dispatch(setFilterType(t));
  };

  const onClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className={style.actions}>
      <span className={style.text}>{`${
        tasks.filter((item) => !item.checked).length
      } items left`}</span>
      <div className={style.container}>
        <span
          className={clsx(style.span, type === "all" && style.checked)}
          onClick={() => onChangeType("all")}
        >
          All
        </span>
        <span
          className={clsx(style.span, type === "active" && style.checked)}
          onClick={() => onChangeType("active")}
        >
          Active
        </span>
        <span
          className={clsx(style.span, type === "completed" && style.checked)}
          onClick={() => onChangeType("completed")}
        >
          Completed
        </span>
      </div>
      <button
        className={clsx(style.text, style.button)}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}
