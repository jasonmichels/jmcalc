import React from 'react'
import { Provider } from 'react-redux'
import DevTools from '../containers/DevTools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Root.css';
import AppBar from 'material-ui/AppBar';
import Footer from '../components/Footer'
import CalculatorContainer from '../containers/CalculatorContainer'

const Root = ({ store }) => (
    <Provider store={store}>
        <MuiThemeProvider> 
            <div>   
                <AppBar
                title="Jason's Calculator"
                showMenuIconButton={false}
                />
                <CalculatorContainer /> 
                <DevTools />
                <Footer />
            </div>
        </MuiThemeProvider>
    </Provider>
);

export default Root