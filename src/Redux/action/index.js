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

