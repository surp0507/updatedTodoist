import { SET_SHOULD_SHOW_MAIN } from "../constants";
import { SHOW_QUICK_ADD_TASK } from "../constants";

const initialState={
  shouldShowMain:false,
  showQuickAddTask:false,
  showAddTaskMain:true

}

export const headerReducer=(state = initialState,action)=>{
  switch(action.type){
    case SET_SHOULD_SHOW_MAIN:return{
      ...state,
      shouldShowMain:action.payload
    }
    case SHOW_QUICK_ADD_TASK:return{
      ...state,
      showQuickAddTask:action.payload
    }
    default:return state;
  }
}