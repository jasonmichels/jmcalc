import { connect } from 'react-redux'
import CalcNumbers from '../components/CalcNumbers'
import {userSelectedNum, userSelectedAddition, userSelectedClear, userSelectedEquals} from '../actions'

import {socket} from '../api/calc'

const mapStateToProps = state => ({})

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
    onEqualsSelect: () => {
        socket.emit('submitCalculation', '5+5=10');
        // dispatch(userSelectedEquals())
        // check if we should submit the equation
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcNumbers);