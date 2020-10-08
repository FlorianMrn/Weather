import { connect } from 'react-redux';

// Import actions
import { loadingAuth, register, login} from '../actions';

// Import Local
import { Nav } from '../../components/weather/components/header/Auth/Nav';

const mapStateToProps = ( state ) => ({
    isAuthenticated : state.auth.isAuthenticated,
    user : state.auth.user,
    loading : state.auth.loading,
    errors : state.auth.errors
});

const mapDispatchToProps = ( dispatch ) => ({
    loadingAuth : () => {
        const action = loadingAuth();
        dispatch(action);
    },
    register : () => {
        const action = register();
        dispatch(action);
    },
    login : () => {
        const action = login();
        dispatch(action);
    }
});

const navHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default navHeaderContainer;