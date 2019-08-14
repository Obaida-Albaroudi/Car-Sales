import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

import { reducerFunction } from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(reducerFunction);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, rootElement);
