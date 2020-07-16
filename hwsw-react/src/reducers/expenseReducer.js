import { ADD_EXPENSE, GET_EXPENSES_PENDING, GET_EXPENSES_FAIL } from '../actions/actionType';

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
            ...state,

            expenses: [],
            isPending: true,
        }

        case GET_EXPENSES_PENDING: return {
            // spread operator: redeti state-t megtartom
            ...state,

            expenses: action.value,
            isPending: false
        }
        
        case GET_EXPENSES_FAIL: return {
            ...state,

            isPending: false,
            error: action.error
        }
        
        case ADD_EXPENSE: return {
            // {...object} acts like Object.assign()
            // Passing {...object} as an attribute will add all of the properties of the object as separate attributes. 
            // It’s a bit calling Object.assign() on the props that you’ll pass to createElement().
            ...state,
            expenses: [
                ...state.expenses,
                // tömbnek az elemei
                // Object.assign új kiadást összeredenlni eg ID mezőve, ami nem más mint a tömb listának az utolsó elemenek az ID-je
                Object.assign(
                    action.value,
                    { id: state.expenses[state.expenses.length - 1].id + 1 })
                ]
        }
        default: return state;
    }
};

export default expenseReducer;