import { createForm } from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import configureStore from './stores/configureStore';

import MapPage from './components/home/MapPage';
import App from './components/EntryRouter';

const store = configureStore();

let mountNode = document.getElementById('root');

// 全局的Store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    mountNode
);
//ReactDOM.render(<EntryRouter />, mountNode);
//ReactDOM.render(<MapPage />, mountNode);
