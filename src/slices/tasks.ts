import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "../ui/Task";
import { TASKS } from "../mock/tasks";

export type TFilter = "all" | "completed" | "active";

type TTasksSlice = {
  filter: TFilter;
  tasks: TTask[];
};

const initialState: TTasksSlice = {
  filter: "all",
  tasks: TASKS,
};

const tasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const id = Math.round(
        Math.random() * 100000 + (100000 - 100000) + 100000
      ).toString();
      state.tasks = [
        { id, text: action.payload, checked: false },
        ...state.tasks,
      ];
    },
    setFilterType: (state, action: PayloadAction<TFilter>) => {
      state.filter = action.payload;
    },
    setCheckTask: (state, action: PayloadAction<string>) => {
      state.tasks.map((item) => {
        if (item.id === action.payload) {
          const newItem = item;
          newItem.checked = !newItem.checked;
          return newItem;
        }
        return item;
      });
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((item) => !item.checked);
    },
  },
  selectors: {
    getTasks: (state) => {
      return state.tasks;
    },
    getFilter: (state) => {
      return state.filter;
    },
  },
});

export const TasksSlice = tasks.reducer;
export const { addTask, setCheckTask, setFilterType, clearCompleted } =
  tasks.actions;
export const { getTasks, getFilter } = tasks.selectors;
