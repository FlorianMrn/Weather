import axios from 'axios';

import { GET_JSON, SEND_REQUEST} from '../actionsTypes';
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
        case SEND_REQUEST:
            const state = store.getState();
            
            axios.all([
                axios.get(`https://pixabay.com/api/?key=18158026-872f4456ef1cd3e4e34d2ab27&q=${state.input.value}+monument&image_type=photo&lang=fr&per_page=3`),
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${state.input.value}&appid=eadb4a255353c312cbe4c5cbcf2068fb&units=metric`)
                ])
                .then( (res) => {
                    console.log(res);
                    store.dispatch(getPhoto(res[0].data.hits.length > 0 ? res[0].data.hits[0].largeImageURL : "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/98616-minimalism-404_Not_Found-748x421.jpg"));
                    store.dispatch(getJson(res[1]))
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