import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import {NotificationEmitter} from './components';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
            <NotificationEmitter/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
