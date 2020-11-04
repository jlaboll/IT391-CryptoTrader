import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Redux setup */
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
const initialState = {
    form: {
        uid: 0
    }
};
const formReducers = function (state, action) {
    return Object.assign({}, state);
}
const store = createStore(
    combineReducers({
        form: formReducers
    }), initialState);
/* End Redux setup */

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}><App /></Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
