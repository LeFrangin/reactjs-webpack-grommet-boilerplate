import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import {render} from 'react-dom';
import { Router } from 'react-router'
import DevTools from './DevTools'
import routesList from './Routes'
import { AsyncRouterContext } from 'redux-async-props'

export default class Root extends Component {
    render() {
        const { store, history } = this.props;

        const routes = routesList(store);

        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} render={(props) => <AsyncRouterContext
                        {...props}
                    />} />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};