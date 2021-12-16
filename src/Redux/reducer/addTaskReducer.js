
import { SET_TASK } from "../constants";
import { SET_PROJECT } from "../constants";
import { SET_SHOW_MAIN } from "../constants";
import { SET_SHOW_PROJECT_OVERLAY } from "../constants";
import { SET_SHOW_TASK_DATE } from "../constants";
import { SET_TASK_DATE } from "../constants";

const initialState={
  task:'',
  project:'',
  taskDate:'',
  showMain:false,
  showProjectOverlay:false,
  showTaskDate:false
}

export const addTaskReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case SET_TASK:return{
      ...state,
      task:action.payload
    }
    case SET_PROJECT:return{
      ...state,
      project:action.payload
    }
    case SET_SHOW_MAIN:return{
      ...state,
      showMain:action.payload
    }
    case SET_SHOW_PROJECT_OVERLAY:return{
      ...state,
      showProjectOverlay:action.payload
    }
    case SET_TASK_DATE:return{
      ...state,
      taskDate:action.payload
    }
    case SET_SHOW_TASK_DATE:return{
      ...state,
      showTaskDate:action.payload
    }
    default:return state;
  }
}