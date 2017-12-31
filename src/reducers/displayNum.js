import { USER_SELECTED_NUM, USER_SELECTED_CLEAR, USER_SELECTED_ADDITION, USER_SELECTED_EQUALS } from '../actions'

const START = "0"

const displayNum = (
  state = START,
  action
) => {
  switch (action.type) {
    case USER_SELECTED_NUM:
        if (state === START && action.number > 0) {
            return action.number.toString()
        } else if (state === START && action.number === 0) {
            return START
        }

        return state + action.number.toString()
    case USER_SELECTED_CLEAR:
        return START
    case USER_SELECTED_ADDITION:
        // @TODO
        return state
    case USER_SELECTED_EQUALS:
        return START
    default:
      return state
  }
}

export default displayNum