import {combineReducers} from 'redux'
import products from './products';
import cart from './cart'
import phone from './phone'
import laptop from './laptop'
import phukien from './phukien'
import news from './news'
import member from './member'
import account from './account'
var myReducer = combineReducers({
    products,
    cart,
    phone,
    laptop,
    phukien,
    news,
    member,
    account
});

export default myReducer