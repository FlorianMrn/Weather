import { connect } from 'react-redux';

// Import actions
import { loading, sendRequestOpen, sendRequestPixa } from '../actions/actions';

// Import Local
import weatherApp from '../../components/Weather';

const mapStateToProps = ( state ) => ({
    photo : state.weather.photo,
    isLoading : state.weather.isLoading
});

const mapDispatchToProps = ( dispatch ) => ({
    sendRequestOpen : () => {
        const action = sendRequestOpen();
        dispatch(action);
    },
    sendRequestPixa : () => {
        const action = sendRequestPixa();
        dispatch(action);
    },
    load : () => {
        const action = loading();
        dispatch(action);
    }
});

const weatherAppContainer = connect(mapStateToProps, mapDispatchToProps)(weatherApp);

export default weatherAppContainer;
