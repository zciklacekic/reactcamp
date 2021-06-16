//tum statelerin toplandığı yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart : cartReducer    //soldaki bizim verdiğimiz reducer ismi (uygulama içinde cart olarak kullanılacak)
})

export default rootReducer;