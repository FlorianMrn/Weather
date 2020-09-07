import axios from 'axios';

import { GET_JSON, SEND_REQUEST_PIXA, SEND_REQUEST_OPEN} from '../actionsTypes';
import { getPhoto, getJson } from '../actions';

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
        case SEND_REQUEST_PIXA:
            const state = store.getState();
            const input = state.input.value;
            const PIXA_KEY = process.env.REACT_APP_PIXA;
            console.log(`https://pixabay.com/api/?key=${PIXA_KEY}&q=${input}&image_type=photo&lang=fr&per_page=3`);
            axios.get(`https://pixabay.com/api/?key=${PIXA_KEY}&q=${input}&image_type=photo&lang=fr&per_page=3`)
                .then( (res) => {
                    console.log(res);
                    store.dispatch(getPhoto(res.data.hits.length > 0 ? res.data.hits[0].largeImageURL : "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/98616-minimalism-404_Not_Found-748x421.jpg"));
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