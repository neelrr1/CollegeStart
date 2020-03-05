import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './Nav'
import Main from './Main'
import AboutUs from './AboutUs'
import Subscribe from './Subscribe'
import './App.css';

function App(props) {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/about">
                    <AboutUs />
                </Route>
                <Route exact path="/subscribe">
                    <Subscribe />
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route>
                    <h1 style={{ textAlign: 'center' }}>Oops! Looks like this page does not exist.</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;