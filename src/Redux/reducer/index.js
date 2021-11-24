import { combineReducers } from "redux";

import productReducer from "./productReducer";
import productFilter from "./productFilter";
import selectedItem from "./selectedItem";
import SpecificProduct from "./SpecificProduct";


const rootReducer = combineReducers({
  allProduct:  productReducer,
  allFilterProduct:productFilter,
  addedItem:selectedItem,
  specificProduct:SpecificProduct,
  


})

export default rootReducer