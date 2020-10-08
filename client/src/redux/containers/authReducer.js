import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import actions
import { loadingAuth, register, login} from '../actions';

// Import Local
import { Nav } from '../../components/weather/components/header/Auth/Nav';

const mapStateToProps = ( state ) => ({
    isAuthenticated : state.auth.isAuthenticated,
    user : state.auth.user,
    loading : state.auth.loading,
    errors : state.auth.errors,
    message : state.auth.message
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
    }
});

const navHeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));

export default navHeaderContainer;