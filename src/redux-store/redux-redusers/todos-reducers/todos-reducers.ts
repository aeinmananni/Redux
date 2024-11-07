import { InfoType } from "../../../models";
import {  ADD_TEXT, ADD_TODOS, DELETE_TEXT, ERROR_MESSAGE, SET_INPUT_VALUE, TOGGLE_MODAL } from "../../actions-actionsTodos";

export type TodoState = {

    infoObjects: InfoType;
  }

 export  const initialState: TodoState = {
    infoObjects: {
      error:"",
      inputValue:"",
      text: "All",
      showModal: false,
      state: ["completed", "InCompleted", "All"],
      inputValues: [],
    },
  };

  
   const todoReducer = (state=initialState,action:any) =>{
        switch(action.type){
           case TOGGLE_MODAL :
            return {
               ...state ,
               infoObjects:{
                ...state.infoObjects,
                 showModal : !state.infoObjects.showModal 
               }
           }
           case ADD_TEXT :
            return{
               ...state,
                infoObjects:{
                   ...state.infoObjects,
                   text : action?.payload 
                }
            }
            case ADD_TODOS:
              return{
                 ...state,
                 infoObjects:{
                   ...state.infoObjects
                   ,inputValues:[...state.infoObjects.inputValues,action.payload]
                 }
              }
              case SET_INPUT_VALUE:
                return{
                  ...state,
                  infoObjects:{
                     ...state.infoObjects,
                      inputValue:action.payload
                  }
                  
                }
                case ERROR_MESSAGE:
                  return {
                     ...state,
                     infoObjects:{
                        ...state.infoObjects,
                        error:action.payload
                     }
                  }
                  case DELETE_TEXT : 
                  return{
                       ...state,
                       infoObjects:{
                        ...state.infoObjects,
                        inputValues:state.infoObjects.inputValues.filter(it => it !== action.payload)
                       }
                  }
           default:
            return state
        }
   }


  export default todoReducer;