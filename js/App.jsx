import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import About from './About'
import FourOhFour from './FourOhFour'


const App = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
