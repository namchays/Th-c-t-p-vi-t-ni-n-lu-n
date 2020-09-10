/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Phone from './Phone';
import Laptop from './Laptop'
import PhuKien from './PhuKien';
import { connect } from 'react-redux';
import * as action from '../Actions/index'

 class Products extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            products : []
        };
    }   
    componentDidMount(){
    
        this.props.listAll();
    }
     

    render() {
      
      
        return (
            <div>
                <div >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone ml-30">
                            <div><span className="fa fa-mobile mr-5" />ĐIỆN THOẠI</div>
                        </div>
                    </div>
                    <Phone  />
                </div>
                <div >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone ml-30 mt-5">
                            <div><span className="fa fa-laptop mr-5" />LAPTOP</div>
                        </div>
                    </div>
                    <Laptop  />
                </div>

                <div >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone ml-30 mt-5">
                            <div><span className="fa fa-headphones mr-5" />PHỤ KIỆN</div>
                         </div>
                    </div>
                    <PhuKien  />
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        listAll: () => {
            dispatch(action.actFetchProductRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)