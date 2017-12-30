import React from 'react';
import 'babel-polyfill'
import {render} from 'react-dom';
import './index.css';
import Root from './components/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { invalidateCalculations } from './actions'
import { fetchCalculationsIfNeeded } from './api/calc'

const store = configureStore();

store.dispatch(invalidateCalculations())
store.dispatch(fetchCalculationsIfNeeded())

injectTapEventPlugin();

render(
    <Root store={store} />, 
    document.getElementById('root')
);

registerServiceWorker();