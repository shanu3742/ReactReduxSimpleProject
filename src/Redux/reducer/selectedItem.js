import { ActionTypes } from "../constatnt";
const initialState= {
    product:[
       
    ]
}

const selectedItem= (state=initialState,{type,payload}) => {

 
    
    switch (type) {
       
        case ActionTypes.SINGLE_SELECTED_ITEM:return{
            ...state, 
            product : [...state.product , payload]
        }
            
         
    
        default:return  state
           
    }

}

export default selectedItem