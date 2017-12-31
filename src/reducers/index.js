import { combineReducers } from 'redux'
import calculations from './calculations'
import selectedNum from './selectedNum'

const jmcalcapp = combineReducers({
    calculations,
    selectedNum
})

export default jmcalcapp