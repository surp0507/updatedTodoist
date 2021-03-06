import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { projectsReducer } from "./projectsReducer";
import { addProjectReducer } from "./addProjectReducer";
import { sidebarReducer } from "./sidebarReducer";
import { addTaskReducer } from "./addTaskReducer";
import { headerReducer } from "./headerReducer";
export const reducer= combineReducers({
  tasksReducer,
  projectsReducer,
  sidebarReducer,
  addProjectReducer,
  addTaskReducer,
  headerReducer
})