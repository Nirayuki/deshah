import React from 'react';
import Home from '../src/Pages/Home/index';
import { Route, Switch} from 'react-router-dom';


const Routes = () => {
    return(
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
    )
}


export default Routes;