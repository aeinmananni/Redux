import {combineReducers,createStore} from 'redux';
import CounterValue from './redux-redusers/counter-reducers/counter-reducers';
import todoReducer from './redux-redusers/todos-reducers/todos-reducers';



const rootReducers = combineReducers({
     counter :CounterValue,
      todos : todoReducer
})


const store = createStore(rootReducers);

export default store;