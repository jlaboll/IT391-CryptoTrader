import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {Route} from 'react-router';
import reduxThunk from 'redux-thunk';
import {AUTHENTICATE_THE_USER} from './actions/types';
import RequireAuth from './components/auth/require_auth';
import {profile} from './reducers/profile';
import {NavigationBar} from "./components/NavigationBar";
import {StyledSwitch} from "./resources/Styles";
import {Home} from "./routes/Home";
import {About} from "./routes/About";
import {LiveTrading} from "./routes/LiveTrading";
import {Login} from "./routes/Login";
import SignUp from "./routes/SignUp";
import {NoMatch} from "./routes/NoMatch";
import history from "./resources/history";

/* ...import necessary components */

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))(createStore);

const store = createStoreWithMiddleware(profile);

/* ... */

// Check for token and update application state if required
const token = localStorage.getItem('token');
if (token) {
    store.dispatch({type: AUTHENTICATE_THE_USER});
}

/* ... */



ReactDOM.render(
    <Provider store={store}>
        <NavigationBar/>
        <StyledSwitch history={history}>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/live-trading" component={RequireAuth({LiveTrading})}/>
            <Route path="/dashboard" component={RequireAuth()}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route component={NoMatch}/>
        </StyledSwitch>
    </Provider>,
    document.getElementById('root')
)

