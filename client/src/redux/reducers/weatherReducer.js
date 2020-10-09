import { GET_JSON, GET_PHOTO, LOADING} from '../actionsTypes';

// Local Import
import test from '../../assets/json/test.json';

const initialState = {
    infos: test,
    photo : 'https://metropole.nantes.fr/files/images/vie-institutions/villes/nantes-vue-aerienne-1920.jpg',
    isLoading : false,
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
        case LOADING : {
            return (
                {
                        ...state,
                        isLoading : state.isLoading ? false : true
                }
            )
        }
        default : {
            return state
        }
    };
};

export default weather;