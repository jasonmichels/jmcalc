export const INVALIDATE_CALCULATIONS = 'INVALIDATE_CALCULATIONS'
export const invalidateCalculations = () => ({
      type: INVALIDATE_CALCULATIONS
});

export const REQUEST_CALCULATIONS = 'REQUEST_CALCULATIONS'
export const requestCalculations = () =>  ({
    type: REQUEST_CALCULATIONS
})

export const RECEIVE_CALCULATIONS = 'RECEIVE_CALCULATIONS'
export const receiveCalculations = (json) => ({
    type: RECEIVE_CALCULATIONS,
    calculations: json.data.map(child => child),
    receivedAt: Date.now()
})