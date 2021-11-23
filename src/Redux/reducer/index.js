import { combineReducers } from "redux";

import productReducer from "./productReducer";
import productFilter from "./productFilter";

const rootReducer = combineReducers({
  allProduct:  productReducer,
  allFilterProduct:productFilter

})

export default rootReducer