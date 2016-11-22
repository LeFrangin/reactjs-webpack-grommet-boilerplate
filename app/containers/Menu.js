import { connect } from 'react-redux'
import Toolbar from '../components/MenuToolbar'
import { changeLocale } from '../actions'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
    return {
        locale: state.locale,
        currentRoute: state.routing.locationBeforeTransitions.pathname
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLocale: (locale) => {
            dispatch(changeLocale(locale))
        },
        changeRoute: (route) => {
            dispatch(push(route));
        }
    }
};

const Menu = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default Menu