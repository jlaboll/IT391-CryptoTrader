import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// /* Redux setup */
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducer from './Reducers/profile'
//
// const store = createStore(reducer);
// /* End Redux setup */

// const render = () =>
ReactDOM.render(
    <React.StrictMode>
        {/*<Provider store={store} id = "store">*/}
            <App/>
       {/*</Provider>*/}
    </React.StrictMode>,
    document.getElementById('root')
);
// render()
// store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
