import { connect } from 'react-redux'
import CalcNumbers from '../components/CalcNumbers'
import {userSelectedNum, userSelectedAddition, userSelectedClear, userSelectedEquals} from '../actions'

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
        dispatch(userSelectedEquals())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcNumbers);