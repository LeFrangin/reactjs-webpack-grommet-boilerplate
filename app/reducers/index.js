import * as ActionTypes from '../actions'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';

function locale(state = 'fr', action) {
    const { type } = action;

    switch (type) {
        case ActionTypes.CHANGE_LOCALE:
            return action.locale;
        default:
            return state;
    }
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
    const { type, error } = action;

    switch (type) {
        case ActionTypes.RESET_ERROR_MESSAGE:
            return null;
        case ActionTypes.SET_ERROR_MESSAGE:
            return error;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    errorMessage,
    routing: routerReducer,
    locale,
    form: formReducer
});

export default rootReducer