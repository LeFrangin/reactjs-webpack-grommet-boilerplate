import { connect } from 'react-redux'
import Home from '../../components/Home'

const mapStateToProps = (state) => {
    return {
        locale: state.locale
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomePage