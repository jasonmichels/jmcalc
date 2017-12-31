import { combineReducers } from 'redux'
import calculations from './calculations'
import selectedNum from './selectedNum'
import displayNum from './displayNum'

const jmcalcapp = combineReducers({
    calculations,
    selectedNum,
    displayNum
})

export default jmcalcapp