import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import countReducer from './reducers/countReducers';
import expenseReducer from './reducers/expenseReducer';
import { reduxLogger } from './utils/reduxLogger';


const rootReducer = combineReducers({
    count: countReducer,
    expense: expenseReducer
})

// mik is ezek a middleware-k, hol tudum beilleszteni, action-reducer folyamat között
// figyelhetünk állapot változást, vagy egy logger-t tudnk csinálni
const middleware = [ thunk, reduxLogger ]

// ez egy middleware, enhancer-ek : mgasabb szinten ugy kell tekinteni árjuk, hogy a store-n tudnak minmálisan módosítani
const composeEnhancers =
    // a windows ittt a browser
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

// kivezetjük az app.js-ből a state-t ide
// Redux devtools használata : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// subsrcibe-al lehet elérni a dispatch után változásokat
// amin végig ment az action, reducer. store-ba visszakerült az érték,
// subscibe-on keresztül kapunk üzenetet, hogy milyen állapotba van a state, milyen változások voltak benneú/// így tudunk felirakozni a változásokat
// vmilyen változás bekövetkezett, igy iratkozunk felk
// store.subscribe(() => console.log('count:', store.getState()))

// store.dispatch(increment(5))
// store.dispatch({ type: DECREMENT, value: 3 })
// store.dispatch({ type: DECREMENT, value: 2 })

export default store;
