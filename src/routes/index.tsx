import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            {/* rota repositories + parametro + tudo q tiver a frente */}
            <Route path="/repositories/:repo+" component={Repository}></Route>
        </Switch>
    );
}

export default Routes;