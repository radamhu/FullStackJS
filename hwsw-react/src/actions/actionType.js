export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const GET_EXPENSES_PENDING = "GET_EXPENSES_PENDING";
export const GET_EXPENSES_SUCCESS = "GET_EXPENSES_SUCCESS";
export const GET_EXPENSES_FAIL = "GET_EXPENSES_FAIL";

export const POST_EXPENSE_PENDING = "POST_EXPENSE_PENDING";
export const POST_EXPENSE_SUCCESS = "POST_EXPENSE_SUCCESS";
export const POST_EXPENSE_FAIL = "POST_EXPENSE_FAIL";


// action creator function
// action objektumot ad vissza
// de mi api-kat szeretnénk hívni, ami ugye promise-on keresztül tudunk megoldani
// export function increment(value) {
//     return  { type: INCREMENT, value }
// }

// action creator function
// addExpesen metódus, új expense-t adunk át
// action creator ADD_EXPENSE típusú expense-t ad tovább
// export function addExpense(expense) { 
//     return { type: ADD_EXPENSE, value: expense }
// }