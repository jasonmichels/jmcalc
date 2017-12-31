import { USER_SELECTED_NUM, USER_SELECTED_CLEAR, USER_SELECTED_ADDITION, USER_SELECTED_EQUALS } from '../actions'

const start = {
    display: "0",
    number: 0,
    addends: [],
    total: 0
}

const displayNum = (
  state = start,
  action
) => {
  switch (action.type) {
    case USER_SELECTED_NUM:
        if (state.number === 0 && action.number > 0) {
            return Object.assign({}, state, {
                display: action.number.toString(),
                number: action.number
            })
        } else if (state.number === 0 && action.number === 0) {
            return state
        }

        var newDisplay = state.display + action.number.toString()
        return Object.assign({}, state, {
            display: newDisplay,
            number: Number(newDisplay)
        })
    case USER_SELECTED_CLEAR:
        return Object.assign({}, state, start)
    case USER_SELECTED_ADDITION:
        if (state.addends.length > 0) {
            if (state.number === 0) {
                return Object.assign({}, state, {
                    display: state.total.toString(),
                    number: 0
                })
            } else {
                var newTotal = state.total + state.number
                return Object.assign({}, state, {
                    display: newTotal.toString(),
                    number: 0,
                    addends: state.addends.concat([state.number]),
                    total: newTotal
                })
            }
        }

        if (state.number > 0) {
            return Object.assign({}, state, {
                display: state.number.toString(),
                number: 0,
                addends: [state.number],
                total: state.number
            })
        }

        return state  
    case USER_SELECTED_EQUALS:
        return Object.assign({}, state, start)
    default:
      return state
  }
}

export default displayNum