import { GET_JSON } from '../actionsTypes';

// Local Import
import * as test from '../../assets/json/test.json';

const initialState = {
    infos: test
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
        default : {
            return state
        }
    };
};

export default weather;