import React from 'react';
import Home from '../src/Pages/Home/index';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;