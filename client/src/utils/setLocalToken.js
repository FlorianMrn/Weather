import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, disconnect } from '../redux/actions';
import store from '../redux/store';
import { decode } from 'punycode';

const setLocalToken = () => {
    if (localStorage.jwtToken) {

        const token = localStorage.jwtToken;
        setAuthToken(token);
        const decoded = jwt_decode(token);
        store.dispatch(setCurrentUser(decoded));

        const currentTime = Date.now();
        if (decode.exp < currentTime) {

            store.dispatch(disconnect());

        };
        
    } else {
        return;
    }
};

export default setLocalToken;