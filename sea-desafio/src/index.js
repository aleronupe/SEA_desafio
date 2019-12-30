// ## Step 1 ## : Import the necessary libraries 

import React from 'react';
import ReactDOM from 'react-dom';

import "antd/dist/antd.css";
import 'typeface-roboto';
import App from './components/app.js'
import "./default.css";
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Reducers } from './reducers';


ReactDOM.render(
    <Provider store={createStore(Reducers)}>
        <App />
    </Provider>, 
    document.getElementById('root'));