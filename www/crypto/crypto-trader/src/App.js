import React from 'react';
import {Home} from './Home';
import {About} from './About';
import {NoMatch} from './NoMatch';
import {Login} from "./Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import styled from "styled-components";

function App() {
    const Frame = styled.div`
            min-height: 400px;
            min-width: 390px;
    `;
    return (
        <Frame>
            <React.Fragment>
                <Router>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
            </React.Fragment>
        </Frame>
    );
}

export default App;
