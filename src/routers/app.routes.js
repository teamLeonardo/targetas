import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../page/login'
import Main from '../page/main'

export default () => {
    return <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
    </Switch>
}

