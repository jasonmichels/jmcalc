import React from 'react';
import 'babel-polyfill'
import {render} from 'react-dom';
import './index.css';
import Root from './components/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import {receiveCalculation} from './actions'

import {socket} from './api/calc'

socket.on('newCalculation', function(calculation){
    store.dispatch(receiveCalculation(calculation))
});

const store = configureStore();

injectTapEventPlugin();

render(
    <Root store={store} />, 
    document.getElementById('root')
);

registerServiceWorker();