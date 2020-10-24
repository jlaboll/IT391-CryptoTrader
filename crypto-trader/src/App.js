import React from 'react';
import {Home} from './routes/Home';
import {About} from './routes/About';
import {NoMatch} from './NoMatch';
import {Login} from "./routes/Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {Container} from "react-bootstrap";
import styled from "styled-components";

const Body = styled(Container)`
padding: 0px 0px;
`;
function App() {
    return (
        <>
            <Router>
                <NavigationBar/>

                <Body id="body-container">

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>

                </Body>
            </Router>
        </>
    );
}

export default App;
