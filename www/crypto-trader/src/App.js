import React from 'react';
import {Home} from './Home';
import {About} from './About';
import {NoMatch} from './NoMatch';
import {Login} from "./Login";
import {Sign_up} from "./Sign_up";
import history from './history';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {Container} from "react-bootstrap";


function App() {
    return (
        <>
            <Router history={history}>
                <NavigationBar/>

                <Container id="body-container">

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/Sign_Up" component={Sign_up}/>
                        <Route component={NoMatch}/>
                    </Switch>

                </Container>
            </Router>
        </>
    );
}

export default App;
