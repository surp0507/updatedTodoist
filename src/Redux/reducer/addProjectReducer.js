import  {SET_SHOW} from '../constants/index'
import { SET_PROJECT_NAME } from '../constants/index'

const initialState={
  show:false,
  projectName:''
}

export const addProjectReducer=(state =initialState,action)=>{
  switch(action.type){
    case SET_SHOW:return{
      show:action.payload
    }
    case SET_PROJECT_NAME:return{
      projectName:action.payload
    }
    default:return state;
  }
}