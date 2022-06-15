import { createStore } from 'redux'
import { favoritesReducer } from "./reducers/reducer";


const store = createStore(
    favoritesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;