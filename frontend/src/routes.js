import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Pokedex from './pages/Pokedex'
import Home from './pages/Home'
import Error from './pages/404'
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/404' component={Error} />
                <Route path='/pokemon/:idp' component={Pokedex} />
            </Switch>
        </Router>
    )
}
