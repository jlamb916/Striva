import { connect } from 'react-redux';
import Greeting from './greeting';
import { signout } from '../actions/session_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);