import * as Types from '../Constants/ActionTypes'
var initialState = [];
var data = [];
var myReducer = (state = initialState, action)=>{
    switch(action.type){
            case(Types.ACT_FETCH_PRODUCT):
            
            data = action.products.filter(element =>{
                return element.type === 'phukien'
            })
            return [...data];
      
            case(Types.ON_PHUKIEN_FILTER):
           
            state = data;
            
            switch(action.number){
                case 1:
                    state = state.filter(ele =>ele.price < 200000);break;
                case 2:
                    state = state.filter(ele =>ele.price >= 200000 && ele.price <350000); break;
                case 3:
                    state = state.filter(ele =>ele.price >= 350000 && ele.price <700000); break;
                case 4:
                    state = state.filter(ele =>ele.price >= 700000 );break;
                case 5:
                    state = data;break;
      
    
                default: return state
            }
            
        return [...state];
        default: return state;
    }
}   
export default myReducer