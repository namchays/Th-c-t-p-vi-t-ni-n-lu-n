import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../Actions/index'
class ItemSearch extends Component {
    viewDetail = (params) =>{
        this.props.viewDetail(params);
    }
    onClick = (e, Product)=> {
        e.preventDefault();
        this.props.addToCart(Product);
          }
    render() {
        
        var {products} = this.props;
       
        var element = products.map(e =>{
            return (
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" key= {e.id}>

                <div className="card" style={{width: '20rem',height:'29rem'}}>
                
                {/* width="170px"  height="170px" */}
                    <img  alt="iphone" id="yourImgId" src={e.img}  style ={{width: '15rem', height :'15rem'}}/>
                      <div className="caption">
                          <h4 className = "ml-5" style ={{height : 39}}>{(e.name)}</h4>
                          <p  className = "ml-5">
                              {(e.price)} VNĐ
                          </p>
                          <p>
                                        
                              <a className="btn btn-success ml-5" href=" " onClick={(event) => this.onClick(event,e)}  >
                                  <span className="fa fa-cart-plus"></span>
                              </a>
                              <a className="btn btn-success ml-5" href="/detail" onClick = {() => this.viewDetail(e)}>
                                  <span>
                                      Xem thông tin
                                  </span>
                              </a>
                          </p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
           
           <div>
               {element}
           </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (product) => {
            dispatch(action.addToCart(product))
        },
        viewDetail : (product) =>{
            dispatch(action.viewProduct(product));
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemSearch)