import { InfoType } from "../../../models";
import {  ADD_TEXT, ADD_TODOS, ERROR_MESSAGE, SET_INPUT_VALUE, TOGGLE_MODAL } from "../../actions-actionsTodos";

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

  
   const todoReducer = (state=initialState,action:{ type: string, payload?: string }) =>{
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
                   text : action.payload
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
           default:
            return state
        }
   }

  // const todoReducer = (state = initialState, action: any): TodoState => {
  //   switch (action.type) {
  //     case ADD_TODO:
  //       return {
  //         ...state,
  //         infoObjects: {
  //           ...state.infoObjects,
  //           inputValues: [...state.infoObjects.inputValues, action.payload],
  //         },
  //       };
  //     case SET_INPUT_VALUE:
  //       return { ...state, inputValue: action.payload };
  //     case SET_ERROR:
  //       return { ...state, error: action.payload };
  //     case TOGGLE_MODAL:
  //       return {
  //         ...state,
  //         infoObjects: { ...state.infoObjects, showModal: !state.infoObjects.showModal },
  //       };
  //     default:
  //       return state;
  //   }
  // };

  export default todoReducer;