import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App.js'
import HomePage from './Pages/HomePage'
import TestPage from './Pages/TestPage'
import NotFoundPage from './Pages/NotFoundPage'
import Config from "../config.json"

export default (store) => {

    function baseUrl(path) {
        return Config.url + path
    }

    return (
        <Route path={baseUrl("/")} component={App}>
            <IndexRoute component={HomePage} />
            <Route path={baseUrl("/test")}>
                <IndexRoute component={TestPage} />
            </Route>
            {/*<Route path="example">*/}
                {/*<IndexRoute component={ExampleIndexPage} />*/}
                {/*<Route onEnter={ signOut }>*/}
                    {/*<Route path="sign/in" component={CompanySignInPage}/>*/}
                    {/*<Route path="sign/up" component={CompanySignUpPage}/>*/}
                {/*</Route>*/}
            {/*</Route>*/}
            <Route path="*" component={NotFoundPage}/>
        </Route>
    );
}