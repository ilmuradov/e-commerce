import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productsReaducer from "./products-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    products: productsReaducer,
    auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

window.store = store