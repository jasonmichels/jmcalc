import { RECEIVE_CALCULATION } from '../actions'

const calculations = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_CALCULATION:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: [action.calculation].concat(state.items),
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default calculations