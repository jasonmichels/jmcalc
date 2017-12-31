import React from 'react'
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types'

const paperStyle = {
    padding: '8px',
    backgroundColor: 'black',
    textAlign: 'right'
}

const numStyle = {
    fontSize: '24pt',
    color: 'white'
}

const CalcDisplay = ({displayNum}) => (
    <Paper zDepth={1} style={paperStyle}>
        <div style={numStyle}>{displayNum}</div>
    </Paper>
);

CalcDisplay.propTypes = {
    displayNum: PropTypes.string.isRequired
}

export default CalcDisplay