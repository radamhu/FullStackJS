import { 
    GET_EXPENSES_SUCCESS,
    GET_EXPENSES_PENDING, 
    GET_EXPENSES_FAIL, 
    POST_EXPENSE_PENDING, 
    POST_EXPENSE_FAIL,
    POST_EXPENSE_SUCCESS
 } from '../actions/actionType';

const initialState = {
    expenses: [],
    isPending: false,
    error: null
}

// reducer mit csinál? a régi állapotból egy új állapotot állít elő, anélkül hogy mutálna
// reducer létrehozsa, csak arraz eseményre koncentrál, ami lista hozzáadás, stb
// kezdeti állapotot vár, incializálva üres tömbbel
const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXPENSES_PENDING: return {
            // spread operator: eredeti state-t megtartom
            ...state,

            expenses: [],
            isPending: true,
            error: null
        }

        case GET_EXPENSES_SUCCESS: return {
            ...state,

            expenses: action.value,
            isPending: false
        }
        
        case GET_EXPENSES_FAIL: return {
            ...state,

            isPending: false,
            error: action.error
        }
        
        case POST_EXPENSE_SUCCESS: return {
            ...state,

            expenses: [...state.expenses, action.value]
        }

        case POST_EXPENSE_FAIL:
        case POST_EXPENSE_PENDING:
        default: return state;

        // case ADD_EXPENSE: return {
        //     // {...object} acts like Object.assign()
        //     // Passing {...object} as an attribute will add all of the properties of the object as separate attributes. 
        //     // It’s a bit calling Object.assign() on the props that you’ll pass to createElement().
        //     ...state,
        //     expenses: [
        //         ...state.expenses,
        //         // tömbnek az elemei
        //         // Object.assign új kiadást összeredenlni eg ID mezőve, ami nem más mint a tömb listának az utolsó elemenek az ID-je
        //         Object.assign(
        //             action.value,
        //             { id: state.expenses[state.expenses.length - 1].id + 1 })
        //         ]
        // }
        
    }
};

export default expenseReducer;