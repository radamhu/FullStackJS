import { GET_EXPENSES_PENDING, GET_EXPENSES_SUCCESS, GET_EXPENSES_FAIL } from './actionType';

import { getExpenses as getExpensesAPI, } from '../api';

// action creator function
// action objektumot ad vissza
// de mi api-kat szeretnénk hívni, ami ugye promise-on keresztül tudunk megoldani
function getExpenses() {
    return function (dispatch) {
        // még az API hívás előtt, jelezzük hogy pending az állapoa ennek alekérdezénse
        // majd iskeres lekérdezés esetén jlezzük hogy sikerse
        // ill átadjuk az eredméynt  és hiba esetén jelezzük hogy vmilyen nem várt esemény történt 
        // és továbbítjuk az err objkumot, ami tartalmaz minden további hibávt
        dispatch({
            type: GET_EXPENSES_PENDING,
            value: []
        });

        getExpensesAPI()
            .then(response => {
                dispatch({
                    type: GET_EXPENSES_SUCCESS,
                    value: response.data
                })
            })
            .catch(error => {
                dispatch({
                type: GET_EXPENSES_FAIL,
                error
                })
            })
    }
}

export {
    getExpenses
}