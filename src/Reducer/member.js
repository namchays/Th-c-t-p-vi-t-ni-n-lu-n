import * as Types from '../Constants/ActionTypes'

var initialState =  [];
var data = [];
var findIndex = (member, id)=>{
    var result = -1;
    if(member.length >0 ){
        member.forEach((element,index) => {
            if(element.id === id) result = index;
        });
    }
    console.log(result);
    return result;
}
var index = -1
var myReducer = (state = initialState, action) =>{
    switch(action.type){
       
        case(Types.ACT_FETCH_MEMBER):
            data = action.member
            return [...data];
        case(Types.ACT_ADD_MEMBER):
            state.push(action.member)
            return  [...state]
        case(Types.ACT_EDIT_MEMBER):
            console.log(action.member.id);
            index = findIndex(state, action.member.id);
        
            state[index] = action.member;
            return [...state]
        case(Types.ACT_DELETE_MEMBER):
            index = findIndex(state, action.id);
           console.log(index);
            if(index !== -1){
               state.splice(index,1)
            }
            return [...state]
        default: return state;
    }
}
export default myReducer