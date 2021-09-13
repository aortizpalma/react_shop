import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import isInCartReducer from "./isInCartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    product: productReducer,
    cart: cartReducer,
    isInCart: isInCartReducer
})

export default allReducers;