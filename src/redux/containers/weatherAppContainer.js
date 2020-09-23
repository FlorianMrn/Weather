import { connect } from 'react-redux';

// Import actions
import { sendRequestOpen, sendRequestPixa} from '../actions';

// Import Local
import weatherApp from '../../components/weather';

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
    }
});

const weatherAppContainer = connect(mapStateToProps, mapDispatchToProps)(weatherApp);

export default weatherAppContainer;
