import { createStore, combineReducers } from 'redux';
import input from './reducers/inputReducer';
import weather from './reducers/weatherReducer';

export default createStore(combineReducers({
    input,
    weather}) , 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());