import { ActionTypes } from "../constatnt";
const initialState= {
    product:[
       
    ]
}

const SpecificProduct = (state=initialState,{type,payload}) => {

    switch (type) {
        case ActionTypes.SPECIFIC_PRODECT:return{...state,products:payload}
            
         
    
        default:return  state
           
    }

}

export default SpecificProduct