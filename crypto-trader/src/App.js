import React from 'react';
import {Home} from './routes/Home';
import {About} from './routes/About';
import {NoMatch} from './routes/NoMatch';
import {Login} from "./routes/Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {Body, StyledSwitch} from "./Styles";
import {userContext} from "./context_based/userContext";

function App(){

        return (

            <>
                <Router>
                    <userContext.Provider value={value}>
                        <NavigationBar/>
                    </userContext.Provider>
                    <Body id="body-container">

                        <StyledSwitch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/login" component={Login}/>
                            <Route component={NoMatch}/>
                        </StyledSwitch>

                    </Body>
                </Router>
            </>

        )

}


export default App;