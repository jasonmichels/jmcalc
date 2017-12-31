import { USER_SELECTED_NUM } from '../actions'

const selectedNum = (
  state = 0,
  action
) => {
  switch (action.type) {
    case USER_SELECTED_NUM:
      return action.number
    default:
      return state
  }
}

export default selectedNum