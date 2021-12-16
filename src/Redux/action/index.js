import { SET_TASKS } from "../constants";
import { SET_PROJECTS } from "../constants";
import { SET_ARCHIVED_TASKS } from "../constants";
import { SET_SELECTED_PROJECT } from "../constants";
import { SET_ACTIVE } from "../constants";
import { SET_SHOW_PROJECTS } from "../constants";
import { SET_PROJECT_ACTIVE } from "../constants";
import { SET_SHOW_MODAL } from "../constants";
import { SET_SHOW } from "../constants";
import { SET_PROJECT_NAME } from "../constants";
import { SET_TASK } from "../constants";
import { SET_SHOW_PROJECT_OVERLAY } from "../constants";
import { SET_TASK_DATE } from "../constants";
import { SET_PROJECT } from "../constants";
import { SET_SHOW_MAIN } from "../constants";
import { SET_SHOW_TASK_DATE } from "../constants";

export const setTasks=(payload)=>{
  return{
    type:SET_TASKS,
    payload
  }
}

export const setProjects=(payload)=>{
  return{
    type:SET_PROJECTS,
    payload
  }
}

export const setArchivedTasks=(payload)=>{
  return{
    type:SET_SELECTED_PROJECT,
    payload
  }
}

export const setSelectedProject=(payload)=>{
  return{
    type:SET_ARCHIVED_TASKS,
    payload
  }
}

export const setActive=(payload)=>{
  return{
    type:SET_ACTIVE,
    payload
  }
}

export const setShowProjects=(payload)=>{
  return{
    type:SET_SHOW_PROJECTS,
    payload
  }
}

export const setProjectActive=(payload)=>{
  return{
    type:SET_PROJECT_ACTIVE,
    payload
  }
}

export const setShowModal=(payload)=>{
  return{
    type:SET_SHOW_MODAL,
    payload
  }
}

export const setShow=(payload)=>{
  return{
    type:SET_SHOW,
    payload
  }
}

export const setProjectName=(payload)=>{
  return{
    type:SET_PROJECT_NAME,
    payload
  }
}

export const setTask=(payload)=>{
  return{
    type:SET_TASK,
    payload
  }
}


export const setShowProjectOverlay=(payload)=>{
  return{
    type:SET_SHOW_PROJECT_OVERLAY,
    payload
  }
}


export const setTaskDate=(payload)=>{
  return{
    type:SET_TASK_DATE,
    payload
  }
}

export const setProject=(payload)=>{
  return{
    type:SET_PROJECT,
    payload
  }
}

export const setShowMain=(payload)=>{
  return{
    type:SET_SHOW_MAIN,
    payload
  }
}

export const setShowTaskDate=(payload)=>{
  return{
    type:SET_SHOW_TASK_DATE,
    payload
  }
}