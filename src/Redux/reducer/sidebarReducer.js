import { SET_ACTIVE } from "../constants";
import { SET_SHOW_PROJECTS } from "../constants";

const initialState={
  showProjects:true,
  active:'Inbox'

}

export const sidebarReducer=(state = initialState,action)=>{
  switch(action.type){
    case SET_ACTIVE:return{
      ...state,
      active:action.payload
    }
    case SET_SHOW_PROJECTS:return{
      ...state,
      showProjects:action.payload
    }
    default:return state;
  }
}