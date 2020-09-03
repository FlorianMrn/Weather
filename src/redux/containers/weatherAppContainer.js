import { connect } from 'react-redux';

// Import actions
import { getPhoto } from '../actions';

// Import Local
import weatherApp from '../../components/weather';

const mapStateToProps = ( state ) => ({
    photo : state.weather.photo
});

const mapDispatchToProps = ( dispatch ) => ({
    getPhoto : (photo) => {
        const action = getPhoto(photo);
        dispatch(action)
    }
});

const weatherAppContainer = connect(mapStateToProps, mapDispatchToProps)(weatherApp);

export default weatherAppContainer;
