import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import dashboardRouts from "./routes";

function App() {
    return (
        <div className="App">
            <Switch>
                {
                    [
                        ...dashboardRouts
                    ].map((routeData) => <Route {...routeData}/>)
                }
            </Switch>
        </div>
    );
}

export default App;
