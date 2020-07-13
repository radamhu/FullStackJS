import { INCREMENT, DECREMENT } from '../actions/actionType';

// ahhoz hogy létrehozzunk egy ilyen globális store-t
// createSotre-t hívjuk meg, hozzuk létre egy store nevű objektumot és hívjuk rá a createStore-t
// createSotre kap egy state-t és egy actiont
// ebben a state-ben fogunk minden lényeges adatot, változót, stb
// action : ennek az action-nek a típusa alapján teljesen új state-t hozunk létre
// MÉG nincs összekötve a react-al
// 1. action-t fogunk dispatchelni
// 2. vmilyen reducer-nek le fogjuk kezelni az action tipust
// 3. új state-t fogunk visszakapni, mert direktbe nem tudunk mutálni
const countReducer = (state = 0, action) => {
    if (action.type === INCREMENT) {
        return state + 1;
    }
    if (action.type === DECREMENT) {
        return state - 1;
    }

    return state;

};

export default countReducer;