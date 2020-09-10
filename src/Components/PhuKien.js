/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import * as action from '../Actions/index'
import {connect} from 'react-redux'
import createPrice from './../function/createPrice'
import { Link } from 'react-router-dom'
class PhuKien extends Component {

    

    componentDidMount(){
        this.props.listAllPhukien()
    }
    viewDetail = (params) =>{
        this.props.viewDetail(params);
    }
    onClick = (e, Product)=> {
        e.preventDefault();
        this.props.addToCart(Product);
          }
    render() {
        var phukien = this.props.phukien;
     
        var element = phukien.map((product, index) => {

         return(
                
             
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" key= {product.id}>

                <div className="card" style={{width: '20rem',height:'29rem'}}>
                
    
                    <img alt="iphone" id="yourImgId" src={product.img}  width="150px"  height="150px"/>
                      <div className="caption">
                          <h4>{(product.name)}</h4>
                          <p >
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
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(action.addToCart(product))
        },
        
        viewDetail : (product) =>{
            dispatch(action.viewProduct(product));
        },
        listAllPhukien : ()=>{
            dispatch(action.actFetchProductRequest())
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        phukien: state.phukien
    }
}
export default connect(mapStateToProps, mapDispatchToProps,)(PhuKien)