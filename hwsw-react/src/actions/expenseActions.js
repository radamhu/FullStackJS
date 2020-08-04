import { 
    GET_EXPENSES_PENDING, 
    GET_EXPENSES_SUCCESS, 
    GET_EXPENSES_FAIL,
    POST_EXPENSE_PENDING,
    POST_EXPENSE_SUCCESS,
    POST_EXPENSE_FAIL
    } from './actionType';

import { 
    getExpenses as getExpensesAPI,
    addExpense as addExpensesAPI
    } from '../api';

// action creator function
// action objektumot ad vissza
// de mi api-kat szeretnénk hívni, ami ugye promise-on keresztül tudunk megoldani
// még az API hívás előtt, jelezzük hogy pending az állapoa ennek alekérdezénse
// majd iskeres lekérdezés esetén jlezzük hogy sikerse
// ill átadjuk az eredméynt  és hiba esetén jelezzük hogy vmilyen nem várt esemény történt 
// és továbbítjuk az err objkumot, ami tartalmaz minden további hibávt

function getExpenses() {
    return function (dispatch) { dispatch({
            type: GET_EXPENSES_PENDING,
            value: []
        });

        return getExpensesAPI().then(response => {dispatch({
                    type: GET_EXPENSES_SUCCESS,
                    value: response.data
                })
            }).catch(error => { dispatch({
                type: GET_EXPENSES_FAIL,
                error
                })
            })
    }
}

// mási formátumban megírt action
// amikor rányomunk a gombra ezt a function fogjuk dispatchelni
const addExpense = (expense) => (dispatch) => {
    dispatch({
        type: POST_EXPENSE_PENDING,
        value: []
    });

    return addExpensesAPI(expense)
        .then((response) => {
            dispatch({
                type: POST_EXPENSE_PENDING,
                value: response.data
            })
        .catch(error => {
            dispatch({
                type: POST_EXPENSE_PENDING,
                error
                })
            })
    })
}

export {
    getExpenses,
    addExpense
}