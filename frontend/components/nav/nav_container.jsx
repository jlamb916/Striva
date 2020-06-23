import { connect } from 'react-redux';
import Nav from './nav';
import { signout } from '../../actions/session_actions';


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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);