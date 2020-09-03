import axios from 'axios';

import { GET_JSON, SEND_REQUEST } from '../actionsTypes';
import { getPhoto } from '../actions';

const weatherMiddleware = store => next => action => {
    console.log("Middleware ok");
    switch (action.type) {
        case GET_JSON:
            axios.get('url')
                .then((res) => {

                })
                .catch((err) => {
                    console.error(err)
                }).finally(() => {

                });
            break;
        case SEND_REQUEST:
            const state = store.getState();
            
            axios.get(`https://pixabay.com/api/?key=18158026-872f4456ef1cd3e4e34d2ab27&q=${state.input.value}+monument&image_type=photo&lang=fr&per_page=3`)
                .then( (res) => {
                    store.dispatch(getPhoto(res.data.hits[0].largeImageURL));
                })
                .catch( (err) => {
                    console.error(err);
                })
                .finally(() => {

                });
            break;
        default :
        next(action);
    };
};

export default weatherMiddleware;