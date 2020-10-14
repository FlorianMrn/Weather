import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import actions
import { loadingAuth, register, login, deleteFav, disconnect, getFavs, getValue, sendRequestPixa, sendRequestOpen, loading} from '../actions';

// Import Local
import { Nav } from '../../components/weather/components/header/Auth/Nav';

const mapStateToProps = ( state ) => ({
    isAuthenticated : state.auth.isAuthenticated,
    user : state.auth.user,
    loading : state.auth.loading,
    errorsAuth : state.auth.errors,
    message : state.auth.message,
    favs : state.input.favs
});

const mapDispatchToProps = ( dispatch ) => ({
    loadingAuth : () => {
        const action = loadingAuth();
        dispatch(action);
    },
    registerAuth : (userData) => {
        const action = register(userData);
        dispatch(action);
    },
    loginAuth : (userData) => {
        const action = login(userData);
        dispatch(action);
    },
    deleteFav: (id) => {
        const action = deleteFav(id);
        dispatch(action);
    },
    disconnect: () => {
        const action = disconnect();
        dispatch(action);
    },
    getFavs: () => {
        const action = getFavs();
        dispatch(action);
    },
     getValue : (value) => {
        const action = getValue(value);
        dispatch(action);
    },
    sendRequestPixa : () => {
        const action = sendRequestPixa();
        dispatch(action);
    },
    sendRequestOpen : () => {
        const action = sendRequestOpen();
        dispatch(action);
    },
    load : () => {
        const action = loading();
        dispatch(action);
    }
});

const navHeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));

export default navHeaderContainer;