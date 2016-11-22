import { connect } from 'react-redux'
import NotFound from '../components/NotFound'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
    return {
        locale: state.locale
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeRoute: (route) => {
            dispatch(push(route));
        }
    }
};

const NotFoundPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotFound);

export default NotFoundPage