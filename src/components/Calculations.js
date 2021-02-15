import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CloudFile from 'material-ui/svg-icons/file/cloud';
import Subheader from 'material-ui/Subheader';

const displayEmptyListMsg = (length) => {
    if (length === 0) {
        return <div style={{color: 'red'}}>No Calculations To Display <br />Submit a calculation and watch this auto update</div>
    }
    return
}

const style = {
    padding: 20,
    width: 330,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

const Calculations = ({calculations, calculationLength}) => (
    <div>
        <Paper style={style} zDepth={1}>
            <List>
            <Subheader>Recent Calculations</Subheader>
            {calculations.map(calc =>
                    <ListItem key={calc.id} primaryText={calc.equation} leftIcon={<CloudFile />} />
            )}
            </List>
            {displayEmptyListMsg(calculationLength)}
        </Paper>
        
    </div>
    
);

Calculations.propTypes = {
    calculations: PropTypes.array.isRequired
}

export default Calculations