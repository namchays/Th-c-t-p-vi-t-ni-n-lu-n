import * as Types from '../Constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('cart'));

var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case (Types.ADD_TO_CART):
      var Check = true;
    
      state.forEach((Cart, value) => {
        if (Cart.product.id === action.product.id) {
          Cart.soluong++;
          Check = false;
        }
      })
      if (Check) {
        state = [...state,
        {
          soluong: 1,
          product: action.product
        }
        ];
      }
    
      alert('Thêm ' + action.product.name + ': ' + (action.product.price) + ' vào giỏ hàng thành công')


      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
   
    case (Types.ADD_QUANTITY):

        state.forEach(e => {

          if (e.product.id === action.cart.product.id) {
            e.soluong++;
          }
        })
        localStorage.setItem('cart', JSON.stringify(state));
        return [...state];
    case(Types.ON_SUBTRACT):
       
        state.forEach((e,index) =>{
          if (e.product.id === action.cart.product.id) {
            if(e.soluong !== 1)
            e.soluong--;
            
          }
        })
        
        localStorage.setItem('cart', JSON.stringify(state));
        return [...state];
    case(Types.DELETE_CART):
    var number = -1;
    state.forEach((e, index)=>{
      if(e.product.id === action.cart.product.id){
        number = index
      }
    })
    state.splice(number,1);
    localStorage.setItem('cart',JSON.stringify(state))
    return [...state]
    default: return state;
  }
}
export default myReducer