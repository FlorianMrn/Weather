import { connect } from 'react-redux';

// Import Actions
import { getValue, sendRequestPixa, sendRequestOpen, loading, saveFav} from '../actions';

// Import Components
import Header from '../../components/weather/components/header';

const mapStateToProps = ( state ) => ({
    value: state.input.value,
    isAuthenticated : state.auth.isAuthenticated,
    favs: state.input.favs
});

const mapDispatchToProps = ( dispatch ) => ({
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
    loading : () => {
        const action = loading();
        dispatch(action);
    },
    saveFav: (value) => {
        const action = saveFav(value);
        dispatch(action);
    }
})

// Container
const headerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default headerContainer;

