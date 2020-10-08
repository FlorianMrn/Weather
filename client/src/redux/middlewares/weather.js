import axios from 'axios';
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";


import { SEND_REQUEST_PIXA, SEND_REQUEST_OPEN, REGISTER, LOGIN} from '../actionsTypes';
import { getPhoto, getJson, loading, loadingAuth, getErrors, message } from '../actions';

const weatherMiddleware = store => next => action => {
    const state = store.getState();
    const input = state.input.value;

    switch (action.type) {
        case SEND_REQUEST_PIXA:
            
            const PIXA_KEY = process.env.REACT_APP_PIXA;

            axios.get(`https://pixabay.com/api/?key=${PIXA_KEY}&q=${input} batiment&image_type=photo&lang=fr&per_page=3&SameSite=None`)
                .then( (res) => {
                    store.dispatch(getPhoto(res.data.hits.length > 0 ? res.data.hits[0].largeImageURL : "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/98616-minimalism-404_Not_Found-748x421.jpg"));
                    store.dispatch(loading());
                })
                .catch( (err) => {
                    console.error("PIXA", err);
                })
                .finally(() => {
                
                });
            break;

        case SEND_REQUEST_OPEN:

            const OPEN_KEY = process.env.REACT_APP_OPEN;

            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${OPEN_KEY}&units=metric&SameSite=None&lang=fr`)
                .then( (res) => {
                    store.dispatch(getJson(res.data));
                })
                .catch( (err) => {
                    console.error("OPEN", err);
                })
                .finally( () => {

                });
            break;

        case REGISTER:
                console.log("register", action.userData);
            axios.post("/api/users/register", action.userData)
                .then(res => {
                     store.dispatch(loadingAuth());
                     store.dispatch(message(res.data.message))
                })
                .catch(err => store.dispatch(getErrors(err.response.data)));
            break;

        case LOGIN:

            axios.post("/api/users/login", action.userData)
                .then(res => console.log("Res Login", res))
                .catch(err => console.log("Err Login", err));
            break;

        default :
            next(action);
    };
};

export default weatherMiddleware;