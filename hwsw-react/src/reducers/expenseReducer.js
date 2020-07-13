import { ADD_EXPENSE } from '../actions/actionType';

const initialState = {
    expenses: [
        { id: 0, name: 'Kiadás #1', amount: 12312, currency: 'huf', comment: '....' },
        { id: 1, name: 'Kiadás #2', amount: 12312, currency: 'euor', comment: '....' }
    ]
}

// reducer mit csinál? a régi állapotból egy új állapotot állít elő, anélkül hogy mutálna
// reducer létrehozsa, csak arraz eseményre koncentrál, ami lista hozzáadás, stb
// kezdeti állapotot vár, incializálva üres tömbbel
const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
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