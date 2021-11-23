import { ActionTypes } from "../constatnt";
const initialState= {
    product:[
       
    ]
}

const productFilter= (state=initialState,{type,payload}) => {

    switch (type) {
        case ActionTypes.FILTER_DATA:return{...state,filterResult:payload}
            
         
    
        default:return  state
           
    }

}

export default productFilter