import React from 'react'
import CalcDisplay from './CalcDisplay'
import CalcNumbersContainer from '../containers/CalcNumbersContainer'
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types'

const paperStyle = {
    padding: '20px',
    backgroundColor: 'black',
    maxWidth: '330px',
    minWidth: '330px'
}

const Calculator = ({displayNum}) => (
    <Paper zDepth={1} style={paperStyle}>
        <CalcDisplay displayNum={displayNum} />
        <CalcNumbersContainer />
    </Paper>
);

Calculator.propTypes = {
    displayNum: PropTypes.string.isRequired
}

export default Calculator