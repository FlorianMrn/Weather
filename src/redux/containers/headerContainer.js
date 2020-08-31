import { connect } from 'react-redux';

// Import Actions
import { getValue } from '../actions';

// Import Components
import Header from '../../components/weather/components/header';

const mapStateToProps = ( state ) => ({
    value: state.value
});

const mapDispatchToProps = ( dispatch ) => ({
    getValue : (value) => {
        const action = getValue(value);
        dispatch(action)
    }
})

// Container
const headerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default headerContainer;

