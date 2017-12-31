import { connect } from 'react-redux'
import CalcNumbers from '../components/CalcNumbers'
import {userSelectedNum, userSelectedAddition, userSelectedClear, userSelectedEquals} from '../actions'
import {socket} from '../api/calc'
const uuidv4 = require('uuid/v4');

const shouldSubmitCalculation = (addends) => {
    return addends.length === 0 ? false : true
}

const mapStateToProps = state => ({
    displayNum: state.displayNum,
})

const mapDispatchToProps = dispatch => ({
    onNumberSelect: (number) => {
        dispatch(userSelectedNum(number))
    },
    onPlusSelect: () => {
        dispatch(userSelectedAddition())
    },
    onClearSelect: () => {
        dispatch(userSelectedClear())
    },
    onEqualsSelect: (displayNum) => {
        if (shouldSubmitCalculation(displayNum.addends)) {
            var equation = ''
            displayNum.addends.forEach(num => {
                equation = equation + num + ' + '
            })

            var newTotal = displayNum.total + displayNum.number
            equation = equation + displayNum.number + ' = ' + newTotal

            socket.emit('submitCalculation', {id: uuidv4(), equation: equation});   
            dispatch(userSelectedEquals())
        } else {
            alert("You must perform at least one calculation before submitting calculation. Please try again")
        }        
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcNumbers);