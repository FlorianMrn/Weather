import { connect } from 'react-redux';

// Import Actions

// Import Components
import ForecastMain from '../../components/weather/components/forecastMain';

const mapStateToProps = ( state ) => ({
    infos: state.weather.infos
});

const mapDispatchToProps = ( dispatch ) => ({
});

// Container
const ForecastMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ForecastMain);

export default ForecastMainContainer;