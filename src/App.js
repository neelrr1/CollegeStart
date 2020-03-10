import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Nav from './Nav'
import Main from './Main'
import AboutUs from './AboutUs'
import Subscribe from './Subscribe'
import './App.css';
import YourSchools from './YourSchools'
import Mentorship from './Mentorship'

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
                <Route exact path="/home">
                    <Main />
                </Route>
                <Route exact path="/yourschools">
                    <YourSchools />
                </Route>
                <Route exact path="/mentorship">
                    <Mentorship />
                </Route>
                <Route exact path="/">
                    {/* <Main /> */}
                    <Redirect exact from="/" to="/subscribe" />
                </Route>
                <Route>
                    <h1 style={{ textAlign: 'center' }}>Oops! Looks like this page does not exist.</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;