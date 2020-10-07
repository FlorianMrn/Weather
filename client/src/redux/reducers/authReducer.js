import { GET_ERRORS, SET_CURRENT_USER, LOADING_AUTH } from '../actionsTypes';


const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {}
};

const isEmpty = require("is-empty");

const weather = ( state = initialState, action ) => {

    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case LOADING_AUTH:
            return {
                ...state,
                loading: true
            };
        case GET_ERRORS:
            return {
                ...state,
                errors : action.payload
            }
        default : 
            return state;
    };
};

export default weather;