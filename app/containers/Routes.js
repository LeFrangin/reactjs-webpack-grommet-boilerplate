import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App.js'
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'
import Config from "../config.json"

export default (store) => {

    function baseUrl(path) {
        return Config.url + path
    }

    return (
        <Route path={baseUrl("/")} component={App}>
            <IndexRoute component={HomePage} />
            <Route path={baseUrl("/test")}>
                <IndexRoute component={HomePage} />
            </Route>
            {/*<Route path="company">*/}
                {/*<IndexRoute component={CompanyIndexPage} />*/}
                {/*<Route onEnter={ requireSignOut }>*/}
                    {/*<Route path="sign/in" component={CompanySignInPage}/>*/}
                    {/*<Route path="sign/up" component={CompanySignUpPage}/>*/}
                {/*</Route>*/}
                {/*<Route onEnter={ requireSignIn }>*/}
                    {/*<Route path="sign/out" component={CompanySignUpPage}/>*/}
                    {/*<Route path="dashboard" component={CompanyDashboardPage}/>*/}
                    {/*<Route path="jobs" component={CompanyJobOffersPage}/>*/}
                    {/*<Route path="candidats" component={CompanySignUpPage}/>*/}
                    {/*<Route path="account" component={CompanyAccountPage}/>*/}
                {/*</Route>*/}
            {/*</Route>*/}
            {/*<Route path="*" component={NotFoundPage}/>*/}
        </Route>
    );
}

/*

 TODO: Add in the route when created

 <Route path="/:login/:name"
 component={RepoPage} />
 <Route path="/:login"
 component={UserPage} />


 */