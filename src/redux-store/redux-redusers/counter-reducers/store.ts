import { createStore } from "redux";
import CounterValue from "./counter-reducers";


const store = createStore(CounterValue);

export default store;
