import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'
import Cookies from 'cookies-js';
import {getCookiesMiddleware} from 'redux-cookies';

const middleware = routerMiddleware(browserHistory);

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, middleware, getCookiesMiddleware(Cookies))
    );
}
