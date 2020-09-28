import React from 'react';
import {Home} from './Home';
import {About} from './About';
import {NoMatch} from './NoMatch';
import {Login} from "./Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {Container} from "react-bootstrap";

function App() {
    return (
        <>
            <Router>
                <NavigationBar/>

                <Container id="body-container">

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>

                </Container>
            </Router>
        </>
    );
}

export default App;
