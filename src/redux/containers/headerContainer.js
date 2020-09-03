import { connect } from 'react-redux';

// Import Actions
import { getValue, sendRequest} from '../actions';

// Import Components
import Header from '../../components/weather/components/header';

const mapStateToProps = ( state ) => ({
    value: state.input.value
});

const mapDispatchToProps = ( dispatch ) => ({
    getValue : (value) => {
        const action = getValue(value);
        dispatch(action);
    },
    sendRequest : () => {
        const action = sendRequest();
        dispatch(action);
    }
})

// Container
const headerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default headerContainer;

