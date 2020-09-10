import * as Types from '../Constants/ActionTypes'


var initialState = [];

var data = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        
        case(Types.ACT_FETCH_PRODUCT): 
            data = action.products.filter(Element=>{
                return Element.type==='phone'
            })
            return [...data];
        case(Types.ON_PHONE_FILTER):
            // console.log(action);
         
            state = data;
                switch(action.number){
                    case 1: state = state.filter(e => e.price < 1000000);break;
                    case 2: state = state.filter(e => e.price >= 1000000 && e.price <3000000);break;
                    case 3: state = state.filter(e => e.price >= 3000000 && e.price <5000000);break;
                    case 4: state = state.filter(e => e.price >= 5000000);break;
                    case 5: state = data;break;

                    default: return [...state]
                }
            
            return [...state];
        default: return [...data];
    }
}  


export default myReducer