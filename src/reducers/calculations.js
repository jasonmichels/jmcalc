import { INVALIDATE_CALCULATIONS, REQUEST_CALCULATIONS, RECEIVE_CALCULATIONS } from '../actions'

const calculations = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_CALCULATIONS:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_CALCULATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_CALCULATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.calculations,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default calculations