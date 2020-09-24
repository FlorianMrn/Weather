import { connect } from 'react-redux';

// Import Actions
import { getJson, getPhoto } from '../actions';

// Import Components
import WeatherMain from '../../components/weather/components/weatherMain';

const mapStateToProps = ( state ) => ({
    infos: state.weather.infos
});

const mapDispatchToProps = ( dispatch ) => ({
    getJson : (infos) => {
        const action = getJson(infos);
        dispatch(action)
    },
    getPhoto : (photo) => {
        const action = getPhoto(photo);
        dispatch(action)
    }
});

// Container
const weatherMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherMain);

export default weatherMainContainer;

