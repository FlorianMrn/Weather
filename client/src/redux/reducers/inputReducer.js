import { GET_VALUE, SAVE_FAV, DELETE_FAV } from '../actionsTypes';

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
        case SAVE_FAV:
            return (
                {
                ...state,
                favs: [...state.favs, state.value]
                }
            )
        case DELETE_FAV:
            const cloneFavs = [...state.favs];
            cloneFavs.splice(action.id, 1);
            return (
                {
                ...state,
                favs: cloneFavs
                }
            )
        default : 
            return state;
    }
};

export default input;