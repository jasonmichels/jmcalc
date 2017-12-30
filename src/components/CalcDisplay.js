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

const CalcDisplay = ({selectedNum}) => (
    <Paper zDepth={1} style={paperStyle}>
        <div style={numStyle}>{selectedNum}</div>
    </Paper>
);

CalcDisplay.propTypes = {
    selectedNum: PropTypes.number
}

export default CalcDisplay