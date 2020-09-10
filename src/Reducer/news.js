import * as Types from '../Constants/ActionTypes'
var initialState = [];
var data = []
var findIndex = (news, id)=>{
    var result = -1;
    if(news.length >0 ){
        news.forEach((element,index) => {
            if(element.id === id) result = index;
        });
    }

    return result;
}
var index = -1;
var myReducer = (state = initialState,action)=>{
    switch(action.type){
        case(Types.ACT_FETCH_NEWS):
        console.log(action);
        data = action.news;
        return [...data]
        case(Types.VIEW_NEWS):
        localStorage.setItem('newShow', JSON.stringify(action.news))
            return state;
        case(Types.ACT_ADD_NEW):
            state.push(action.news);
            return [...state]
        case(Types.ACT_EDIT_NEW):
            index = findIndex(state, action.New.id);
            if(index !== -1)
            state[index] = action.New;
            console.log(action);
            return [...state];
        case(Types.ACT_DELETE_NEW):
            index = findIndex(state,action.id)
            console.log(index);
            state.splice(index,1)
            return  [...state]
        default: return state;
    }
}

export default myReducer