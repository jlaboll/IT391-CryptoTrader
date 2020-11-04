import React from 'react';
import {Home} from './routes/Home';
import {About} from './routes/About';
import {NoMatch} from './routes/NoMatch';
import{Login} from "./routes/Login";
import SignUp from "./routes/SignUp";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {Body, StyledSwitch} from "./resources/Styles";
import {LiveTrading} from "./routes/LiveTrading";



export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <NavigationBar/>
                <Body id="body-container">

                    <StyledSwitch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/live-trading" component={LiveTrading}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route component={NoMatch}/>
                    </StyledSwitch>

                </Body>
            </Router>);
    }
}
