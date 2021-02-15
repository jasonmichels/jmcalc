import { connect } from 'react-redux'
import CalcNumbers from '../components/CalcNumbers'
import {userSelectedNum, userSelectedAddition, userSelectedClear, userSelectedEquals, receiveCalculation} from '../actions'
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
            let equation = ''
            displayNum.addends.forEach(num => {
                equation = equation + num + ' + '
            })

            const newTotal = displayNum.total + displayNum.number
            equation = equation + displayNum.number + ' = ' + newTotal

            dispatch(userSelectedEquals())
            dispatch(receiveCalculation({id: uuidv4(), equation: equation}))
        } else {
            alert("You must perform at least one calculation before submitting calculation. Please try again")
        }        
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcNumbers);