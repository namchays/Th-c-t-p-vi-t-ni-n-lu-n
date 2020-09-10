import React, { Component } from 'react'
import Laptop from './Laptop'
import { connect } from 'react-redux';
import * as action from '../Actions/index'

class LaptopRouter extends Component {
    componentDidMount(){
        this.props.listAllLaptop()
    }
    onClick = (e,num) =>{
        e.preventDefault();
        this.props.onFilter(num);
    }
    render() {
      
        return (
            <div>
                
                <div className="row">
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-30">
                    
                       <h4 className ="breadcrumb">Chọn mức giá:  
                       <a href =" " className ="ml-20" onClick = {(e) =>this.onClick(e,1)}>Dưới 10 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e)=>this.onClick(e,2)}>10 - 15 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,3)}>20 - 25 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,4)}>Trên 30 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,5)}>Tất cả</a>
                       </h4>
                       
                    </div>
                    
                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    {

                    this.props.laptop.length === 0 ? <h4 className ="ml-30">Không tìm thấy mặt hàng với giá yêu cầu</h4> :<Laptop viewDetail = {this.props.viewDetail} />
                     
                    } 
                    </div>
                </div>
                
              
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        laptop: state.laptop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilter: (num) => {
           dispatch(action.onLaptopFilter(num))
        },
        listAllLaptop: () => {
            dispatch(action.actFetchProductRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LaptopRouter)