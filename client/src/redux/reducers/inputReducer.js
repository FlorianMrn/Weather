import { GET_VALUE, SET_FAVS, DELETE_FAV } from '../actionsTypes';

const initialState = {
    value: 'Nantes',
    favs: []
};

const input = ( state = initialState, action ) => {

    switch(action.type) {
        case GET_VALUE: 
            return (
                {
                ...state,
                value : action.value
                }
            )
        case SET_FAVS:
            return (
                {
                ...state,
                favs: action.fav
                }
            )
        case DELETE_FAV:
            return (
                {
                ...state,
                favs: state.favs.filter(fav => fav.id !== action.id)
                }
            )
        default : 
            return state;
    }
};

export default input;