import { ActionTypes } from "../constatnt";
const initialState= {
    product:[
       
    ]
}

const productReducer = (state=initialState,{type,payload}) => {

    switch (type) {
        case ActionTypes.FETCH_USER:return{...state,products:payload}
            
         
    
        default:return  state
           
    }

}

export default productReducer