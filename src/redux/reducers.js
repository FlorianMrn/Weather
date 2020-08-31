import { GET_VALUE } from './actionsTypes';

const initialState = {
    value: ''
};

export const filter = ( state = initialState, action ) => {

    switch(action.type) {
        case GET_VALUE: {
            return (
                {
                ...state,
                value : action.value
                }
            )
        }
        default : {
            return state
        }
    }
}