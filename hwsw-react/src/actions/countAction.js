import { INCREMENT } from './actionType.js';

// action creator function
// action objektumot ad vissza
// de mi api-kat szeretnénk hívni, ami ugye promise-on keresztül tudunk megoldani
export function incrementAsync(value, timeoutInMS = 1000  ) {
    // return  { type: INCREMENT, value }

    return function (dispatch, getState) {
        setTimeout(() => {
            dispatch( { type: INCREMENT, value})
        }, timeoutInMS)
    }
}

// olyan fn.t szeretnék exportálni, ami megkapja valuetimeout param-ot
// olyan fn-el tér vissza, ami megkapja a dispath getState
// ami setTimeoutal tér vissza
// const fn = () => (value, timeoutInMS = 1000 ) = (dispatch, getState) => 
//     setTimeout(() => {
//         dispatch({ type: INCREMENT, value})
//     }, timeoutInMS)