import * as Types from '../Constants/ActionTypes'


var initialState = {
    name : '',
    password : ''
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case(Types.GET_ACCOUNT):
   
    state = {
        name : action.account.name,
        password : action.account.password
    }
    return state;
    default: return state;
  }
}
export default myReducer