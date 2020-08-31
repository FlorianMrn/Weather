import { createStore, combineReducers } from 'redux';
import { filter } from './reducers';

export default createStore(filter , 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());