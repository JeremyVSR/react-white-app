import * as React from "react";
import { Route, Switch, HashRouter } from 'react-router-dom';
import Hello from "./components/presentation/Hello";
import { HelloContainer } from "./components/containers/helloContainer";

const App = () =>
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HelloContainer} />
        </Switch>
    </HashRouter>

export default App;