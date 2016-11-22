import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: () => {
            dispatch(increment())
        },
        onDecrementClick: () => {
            dispatch(decrement())
        }
    }
};

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomePage