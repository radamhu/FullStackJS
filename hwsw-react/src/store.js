import { createStore, combineReducers } from "redux";

import countReducer from './reducers/countReducers';
import expenseReducer from './reducers/expenseReducer';

const rootReducer = combineReducers({
    count: countReducer,
    expense: expenseReducer
})


// kivezetjük az app.js-ből a state-t ide
// Redux devtools használata : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subsrcibe-al lehet elérni a dispatch után változásokat
// amin végig ment az action, reducer. store-ba visszakerült az érték,
// subscibe-on keresztül kapunk üzenetet, hogy milyen állapotba van a state, milyen változások voltak benneú/// így tudunk felirakozni a változásokat
// vmilyen változás bekövetkezett, igy iratkozunk felk
// store.subscribe(() => console.log('count:', store.getState()))

// store.dispatch(increment(5))
// store.dispatch({ type: DECREMENT, value: 3 })
// store.dispatch({ type: DECREMENT, value: 2 })

export default store;
