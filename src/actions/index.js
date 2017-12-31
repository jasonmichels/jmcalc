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

export const USER_SELECTED_NUM = 'USER_SELECTED_NUM'
export const userSelectedNum = (number) =>  ({
    type: USER_SELECTED_NUM,
    number: number
})

export const USER_SELECTED_CLEAR = 'USER_SELECTED_CLEAR'
export const userSelectedClear = () =>  ({
    type: USER_SELECTED_CLEAR
})

export const USER_SELECTED_ADDITION = 'USER_SELECTED_ADDITION'
export const userSelectedAddition = () =>  ({
    type: USER_SELECTED_ADDITION
})

export const USER_SELECTED_EQUALS = 'USER_SELECTED_EQUALS'
export const userSelectedEquals = () =>  ({
    type: USER_SELECTED_EQUALS
})