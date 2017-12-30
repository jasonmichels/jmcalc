import React from 'react'
import { Provider } from 'react-redux'
import DevTools from '../containers/DevTools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Root.css';

const Root = ({ store }) => (
    <Provider store={store}>
        <MuiThemeProvider> 
            <div>   
                <h1>Hello World Calculator</h1>
                <DevTools />
            </div>
        </MuiThemeProvider>
    </Provider>
);

export default Root