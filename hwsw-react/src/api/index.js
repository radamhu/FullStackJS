import axios from 'axios';

const apiURI = process.env.REACT_APP_URI_URL;

// csinálunk egy function-t hogy az axios.get-et fel tudjham használni
// nem kell még param mert nincs szűrés
function getExpenses() {
    // template liretal ``
    return axios.get(`${apiURI}/expenses`)
};

function addExpense(expense) {
    return axios.post(`${apiURI}/expenses`, expense);
}

export {
    getExpenses,
    addExpense
}
