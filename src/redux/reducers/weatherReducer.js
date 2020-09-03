import { GET_JSON, GET_PHOTO } from '../actionsTypes';

// Local Import
import * as test from '../../assets/json/test.json';

const initialState = {
    infos: test,
    photo : 'https://pixabay.com/get/52e0dc464d55a914f6da8c7dda793676143ad6e551576c48702672d5954bc250b0_1280.jpg'
};

const weather = ( state = initialState, action ) => {

    switch(action.type) {
        case GET_JSON: {
            return (
                {
                ...state,
                infos : action.infos
                }
            )
        }
        case GET_PHOTO: {
            return (
                {
                ...state,
                photo : action.photo
                }
            )
        }
        default : {
            return state
        }
    };
};

export default weather;