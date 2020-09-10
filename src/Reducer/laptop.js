import * as Types from '../Constants/ActionTypes'
var initialState = [];
var data = []
var myReducer = (state = initialState, action)=>{
    switch(action.type){
       case (Types.ACT_FETCH_PRODUCT):
           data = action.products.filter(e =>{
               return e.type === 'laptop'
           })
            return [...data]; 
       case(Types.ON_LAPTOP_FILTER):
        // console.log(action);
        state = data;
        switch(action.number){
            case 1: state = state.filter(e => e.price < 10000000);break;
            case 2: state = state.filter(e => e.price >= 10000000 && e.price <15000000);break;
            case 3: state = state.filter(e => e.price >= 20000000 && e.price <25000000);break;
            case 4: state = state.filter(e => e.price >= 30000000);break;
            case 5: state=data; break;

            default: return state
        }
        
    return [...state];
        default: return state;
    }
}   
export default myReducer