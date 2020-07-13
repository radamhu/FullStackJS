export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_EXPENSE = 'ADD_EXPENSE';

// action creator function
export function increment(value) {
    return  { type: INCREMENT, value }
}

// action creator function
// addExpesen metódus, új expense-t adunk át
// action creator ADD_EXPENSE típusú expense-t ad tovább
export function addExpense(expense) { 
    return { type: ADD_EXPENSE, value: expense }
}