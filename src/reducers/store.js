import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productsReaducer from "./products-reducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
    products: productsReaducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

window.store = store