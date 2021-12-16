import { SET_PROJECTS } from "../constants";
import { SET_SELECTED_PROJECT } from "../constants";
import { SET_PROJECT_ACTIVE } from "../constants";
import { SET_SHOW_MODAL } from "../constants";
const initialState={
  projects:[],
  selectedProject:'INBOX',
  active:null,
  show:false
}

export const projectsReducer=(state = initialState,action)=>{
  switch(action.type){
   case SET_PROJECTS:return{
     ...state,
     projects:action.payload
   }
   case SET_SELECTED_PROJECT:return{
    ...state,
    selectedProject:action.payload
  }
  case SET_PROJECT_ACTIVE:return{
    ...state,
    active:action.payload
  }
  case SET_SHOW_MODAL:return{
    ...state,
    show:action.payload
  }
   default:return state;
  }
}