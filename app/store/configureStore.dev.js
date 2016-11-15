import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'
import Cookies from 'cookies-js';
import {getCookiesMiddleware} from 'redux-cookies';
import DevTools from '../containers/DevTools'
import { AsyncRouterContext } from 'redux-async-props'

const middleware = routerMiddleware(browserHistory);

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, createLogger(), middleware, getCookiesMiddleware(Cookies)),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer)
        });
    }

    return store;
}
