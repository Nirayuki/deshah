import React from 'react';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Sobre from './pages/SobreNos/index';
import { Route, Switch} from 'react-router-dom';


const Routes = () => {
    return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/logar" component={Login}/>
                <Route exact path="/registrar" component={Register}/>
                <Route exact path="/sobre" component={Sobre}/>
            </Switch>
    )
}


export default Routes;