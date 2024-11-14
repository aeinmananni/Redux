import {combineReducers,legacy_createStore as createStore} from 'redux';
import CounterValue from './redux-redusers/counter-reducers/counter-reducers';
import todoReducer from './redux-redusers/todos-reducers/todos-reducers';
import ReducerProducts from './store-projects/products/reducer';
import ReducerComments from './store-projects/comments/reducer';
import ReducerArticles from './store-projects/articles/reducer';
import { addProductsAction } from './store-projects/products/action-creators';
import { AddArticlesAction } from './store-projects/articles/action-creators';
import {  ProductStoreType } from '../models';





const store = createStore(combineReducers({
      counter :CounterValue,
       todos : todoReducer,
       products:ReducerProducts,
       articles:ReducerArticles,
       comments:ReducerComments
 }));
 store.dispatch(addProductsAction<ProductStoreType>({id:1,title:"myTiel",exp:"my Exp",price:"1430000"}));
 store.dispatch(AddArticlesAction({id:1,title:"My product is Very Combind easy",exp:"mt EXP"}))
 console.log("Store Updated : " , store.getState());

export default store;