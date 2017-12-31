// import fetch from 'isomorphic-fetch'
// import { requestCalculations, receiveCalculations } from '../actions'
// import {config} from './config'
import io from 'socket.io-client';
export const socket = io('http://localhost:3001');

// const fetchCalculations = () => {
//     return (dispatch) => {
//         dispatch(requestCalculations())
//         return fetch(config.getCalculationsUrl, {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json"
//             },
//         }).then(response => response.json())
//         .then(json => dispatch(receiveCalculations(json)))
//     }
// }


// const shouldFetchCalculations = (state) => {
//     const calculations = state.calculations
//     if (!calculations) {
//         return true
//     } else if (calculations.isFetching) {
//         return false
//     } else {
//         return calculations.didInvalidate
//     }
// }
  
// export const fetchCalculationsIfNeeded = () => {
//     return (dispatch, getState) => {
//         if (shouldFetchCalculations(getState())) {
//             return dispatch(fetchCalculations())
//         } else {
//             // Let the calling code know there's nothing to wait for.
//             return Promise.resolve()
//         }
//     }
// }