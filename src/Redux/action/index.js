import { ActionTypes } from "../constatnt"
export const fetchUser = (products) => {
    return {
        type:ActionTypes.FETCH_USER,
        payload:products

    }

} 

export const filterUser = (Data) => {
     return{
         type:ActionTypes.FILTER_DATA,
         payload:Data
     }
 }

export const selectedItem = (item) => {
    return{
        type:ActionTypes.SINGLE_SELECTED_ITEM,
        payload:item
    }
}
export const specificProduct = (item) => {
    return{
        type:ActionTypes.SPECIFIC_PRODECT,
        payload:item
    }
}
