import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { white } from 'material-ui/styles/colors';
import ContentBack from 'material-ui/svg-icons/content/backspace';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSave from 'material-ui/svg-icons/content/save';
import PropTypes from 'prop-types'

const style = {
    margin: '8px'
};

const numStyle = {
    color: white
};

const CalcNumbers = ({onNumberSelect}) => (
    <div>
        <div>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(7)}}><span style={numStyle}>7</span></FloatingActionButton>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(8)}}><span style={numStyle}>8</span></FloatingActionButton>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(9)}}><span style={numStyle}>9</span></FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}><ContentBack /></FloatingActionButton>
        </div>
        <div>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(4)}}><span style={numStyle}>4</span></FloatingActionButton>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(5)}}><span style={numStyle}>5</span></FloatingActionButton>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(6)}}><span style={numStyle}>6</span></FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}><ContentAdd /></FloatingActionButton>
        </div>
        <div>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(1)}}><span style={numStyle}>1</span></FloatingActionButton>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(2)}}><span style={numStyle}>2</span></FloatingActionButton>
            <FloatingActionButton style={style} onClick={e => {onNumberSelect(3)}}><span style={numStyle}>3</span></FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}><ContentSave /></FloatingActionButton>
        </div>
        <div className="section group">
            <div className="col span_4_of_12"></div>
            <div className="col span_4_of_12"><FloatingActionButton style={style} onClick={e => {onNumberSelect(0)}}><span style={numStyle}>0</span></FloatingActionButton></div>
            <div className="col span_4_of_12"></div>
        </div>
    </div>    
);

CalcNumbers.propTypes = {
    onNumberSelect: PropTypes.func.isRequired
  }

export default CalcNumbers