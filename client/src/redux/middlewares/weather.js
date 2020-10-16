import axios from 'axios';
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";


import { SEND_REQUEST_PIXA, SEND_REQUEST_OPEN, REGISTER, LOGIN, DISCONNECT, SAVE_FAV, GET_FAVS, SEND_DELETE_DATA} from '../actions/actionsTypes';
import { getPhoto, getJson, loading, loadingAuth, getErrors, message, setCurrentUser, setFavs, deleteFav } from '../actions/actions';


const weatherMiddleware = store => next => action => {
    const state = store.getState();
    const input = state.input.value;
    const userId = state.auth.user.id;

    // Special instance to counter headers
    const instance = axios.create();
    delete instance.defaults.headers.common['Authorization'];

    switch (action.type) {
        case SEND_REQUEST_PIXA:
            
            const PIXA_KEY = process.env.REACT_APP_PIXA;

            instance.get(`https://pixabay.com/api/?key=${PIXA_KEY}&q=${input} batiment&image_type=photo&lang=fr&per_page=3&SameSite=None`)
                .then( (res) => {
                    store.dispatch(getPhoto(res.data.hits.length > 0 ? res.data.hits[0].largeImageURL : "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/98616-minimalism-404_Not_Found-748x421.jpg"));
                })
                .catch( (err) => {
                    console.error("PIXA", err);
                })
                .finally(() => {
                    store.dispatch(loading());
                });
            break;

        case SEND_REQUEST_OPEN:

            const OPEN_KEY = process.env.REACT_APP_OPEN;

            instance.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${OPEN_KEY}&units=metric&SameSite=None&lang=fr`)
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
                
            axios.post("/api/users/register", action.userData)
                .then(res => {
                     store.dispatch(message(res.data.message));
                })
                .catch(err => {
                    store.dispatch(getErrors(err.response.data));
                })
                .finally( () => {
                    store.dispatch(loadingAuth());
                })
            break;

        case LOGIN:

            axios.post("/api/users/login", action.userData)
                .then(res => {
                    const { token } = res.data;
                    localStorage.setItem('jwtToken', token);
                    setAuthToken(token);
                    const decoded = jwt_decode(token);
                    store.dispatch(setCurrentUser(decoded));
                })
                .catch(err => {
                    console.log("erreur :", err.response.data)
                    store.dispatch(getErrors(err.response.data));
                })
                .finally( () => {
                    store.dispatch(loadingAuth());
                })
            break;
        
        case DISCONNECT: 

            localStorage.removeItem("jwtToken");
            setAuthToken(false);
            store.dispatch(setCurrentUser({}));
            break;
        
        case SAVE_FAV:
                
        const fav = {id: userId, name: input};
                
            axios.post("/api/favs", fav)
                .then(res => {
                    const fav = {
                        id: res.data.result._id,
                        name: res.data.result.name
                    };
                    store.dispatch(setFavs(fav));
                    
                })
                .catch(err => {
                    console.log(err)
                });
            break;
        
        case GET_FAVS:

            axios.get("/api/favs", { params: { id: userId }})
                .then((response) => {

                    let favs = [];

                    response.data.map((elem) =>{
                        let fav = {id: elem._id, name: elem.name};

                        return favs.push(fav);
                    });

                    store.dispatch(setFavs(favs));
                })
                .catch((error) => {
                console.log(error);
                });
            break;

        case SEND_DELETE_DATA:
            
            const id = action.id;

            axios.delete(`/api/fav/${id}`)
                .finally(() => store.dispatch(deleteFav(id)))
            break;

        default :
            next(action);
    };
};

export default weatherMiddleware;