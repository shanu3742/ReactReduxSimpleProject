import { ActionTypes } from "../constatnt"
export const fetchUser = (products) => {
    return {
        type:ActionTypes.FETCH_USER,
        payload:products

    }

} 

