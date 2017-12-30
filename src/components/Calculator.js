import React from 'react'
import CalcDisplay from './CalcDisplay'
import CalcNumbersContainer from '../containers/CalcNumbersContainer'
import Paper from 'material-ui/Paper';

const paperStyle = {
    padding: '20px',
    backgroundColor: 'black',
    maxWidth: '330px',
    minWidth: '330px'
}

const Calculator = () => (
    <Paper zDepth={1} style={paperStyle}>
        <CalcDisplay selectedNum={0} />
        <CalcNumbersContainer />
    </Paper>
);

export default Calculator