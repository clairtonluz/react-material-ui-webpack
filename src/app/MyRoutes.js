import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./modules/home/Home";
import NotFound from "./commons/ui/components/errors/NotFound";
import Logout from "./modules/auth/Logout";
import Auth from './modules/auth/Auth';
import Evento from './modules/evento/Evento';

const auth = new Auth();

const AuthRoute = ({component: Component, rest}) => (
    <Route {...rest} render={props => (
        auth.getCurrentUser() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

class MyRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <AuthRoute path="/logout" component={Logout}/>
                <Route path="/eventos" component={Evento}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default MyRoutes;