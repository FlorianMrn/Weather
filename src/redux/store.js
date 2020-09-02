import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

// Local Import
import input from './reducers/inputReducer';
import weather from './reducers/weatherReducer';
import weatherMiddleware from './middlewares/weather';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(weatherMiddleware));

export default createStore(combineReducers({
    input, weather}), 
    enhancers);