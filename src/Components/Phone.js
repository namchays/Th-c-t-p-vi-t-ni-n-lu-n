/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import createPrice from './../function/createPrice'
import * as action from '../Actions/index'
import { Link } from 'react-router-dom';
 class Phone extends Component {

    
    componentDidMount(){
        this.props.getAllPhone()
    }
    
    onClick = (e, Product)=> {
        e.preventDefault();
        this.props.addToCart(Product);
          }
    viewDetail = (params) =>{
      
        this.props.viewDetail(params);
    }
    render() {
        var phone = this.props.phone;
      
        var element = phone.map((product, index) => {

         return(
                
             
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" key= {product.id}>

                <div className="card" style={{width: '20rem',height:'29rem'}}>
                
    
                    <img alt="iphone" id="yourImgId" src={product.img}  width="170px"  height="170px"/>
                      <div className="caption">
                          <h4 className = "ml-5"  style ={{height : 27}}>{(product.name)}</h4>
                          <p  className = "ml-5">
                              {createPrice(product.price)} VNĐ
                          </p>
                          <p>
                                        
                              <a className="btn btn-success ml-5" href=" " onClick={(event) => this.onClick(event,product)}  >
                                  <span className="fa fa-cart-plus"></span>
                              </a>
                              <Link className="btn btn-success ml-5" to="/detail" onClick = {() => this.viewDetail(product)}>
                                  <span>
                                      Xem thông tin
                                  </span>
                              </Link>
                          </p>
                        </div>
                    </div>
                </div>
                
          
         
        )
        
      }
      )
  
        return (
            
         <div >
         {element}  
         </div>

            
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (product) => {
            dispatch(action.addToCart(product))
        },
        viewDetail : (product) =>{
            dispatch(action.viewProduct(product));
        },
        getAllPhone : ()=>{
            dispatch(action.actFetchProductRequest())
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        phone: state.phone
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Phone)