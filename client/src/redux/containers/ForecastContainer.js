import { connect } from 'react-redux';

// Import Actions

// Import Components
import ForecastMain from '../../components/Weather/components/ForecastMain';

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