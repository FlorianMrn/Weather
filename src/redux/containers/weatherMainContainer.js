import { connect } from 'react-redux';

// Import Actions
import { getJson } from '../actions';

// Import Components
import WeatherMain from '../../components/weather/components/weatherMain';

const mapStateToProps = ( state ) => ({
    infos: state.weather.infos
});

const mapDispatchToProps = ( dispatch ) => ({
    getJson : (infos) => {
        const action = getJson(infos);
        dispatch(action)
    }
});

// Container
const weatherMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherMain);

export default weatherMainContainer;

