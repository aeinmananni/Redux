import { createStore  } from "redux";
import todoReducer from "./todos-reducers";



const store = createStore(todoReducer);
export default store