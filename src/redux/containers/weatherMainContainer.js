import { connect } from 'react-redux';

// Import Actions
import { getValue } from '../actions';

// Import Components
import WeatherMain from '../../components/weather/components/weatherMain';

const mapStateToProps = ( state ) => ({
    infos: state.weather.infos
});

const mapDispatchToProps = ( dispatch ) => ({
    getValue : (value) => {
        const action = getValue(value);
        dispatch(action)
    }
})

// Container
const weatherMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherMain);

export default weatherMainContainer;

