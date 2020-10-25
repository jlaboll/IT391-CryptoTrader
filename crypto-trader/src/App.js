import React from 'react';
import {Home} from './routes/Home';
import {About} from './routes/About';
import {NoMatch} from './routes/NoMatch';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import {Body, StyledSwitch} from "./Styles";

function App(){

        return (

            <>
                <Router>
                    <NavigationBar/>
                    <Body id="body-container">

                        <StyledSwitch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            {/*<Route path="/login" component={Login}/>*/}
                            <Route component={NoMatch}/>
                        </StyledSwitch>

                    </Body>
                </Router>
            </>

        )

}


export default App;