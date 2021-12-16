import { SET_TASKS } from "../constants";
import { SET_ARCHIVED_TASKS } from "../constants";

const initialState={
  tasks:[],
  archivedTasks:[]
}

export const tasksReducer=(state = initialState,action)=>{
  switch(action.type){
   case SET_TASKS:return{
     ...state,
     tasks:action.payload
   }

   case SET_ARCHIVED_TASKS:return{
    ...state,
    archivedTasks:action.payload
  }
   default:return state;
  }
}