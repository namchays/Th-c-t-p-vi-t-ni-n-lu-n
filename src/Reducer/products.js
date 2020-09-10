import * as Types from '../Constants/ActionTypes'

var initialState = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        
        case(Types.ACT_FETCH_PRODUCT): 
            state = action.products;
           
            return [...state];
        case(Types.SEARCH):
            localStorage.setItem('search', JSON.stringify(action.name));
            return [...state]
        case(Types.VIEW_PRODUCT):
            localStorage.setItem('productShow', JSON.stringify(action.product));
            return state
        
        default: return [...state];
    }
}   
export default myReducer