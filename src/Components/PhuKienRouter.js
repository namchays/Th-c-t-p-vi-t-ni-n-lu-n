import React, { Component } from 'react'
import PhuKien from './PhuKien'
import { connect } from 'react-redux';
import * as action from '../Actions/index'
class PhuKienRouter extends Component {
    componentDidMount(){
        this.props.listAllPhukien();
        
        
    }
    
    onClick = (e,num) =>{
        e.preventDefault();
        this.props.onPhuKienFilter(num);
    }
    render() {
      
        return (
            <div>
                
                <div className="row">
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-30">
                    
                       <h4 className ="breadcrumb">Chọn mức giá:  
                       <a href =" " className ="ml-20" onClick = {(e) =>this.onClick(e,1)}>Dưới 200.000 VNĐ</a>
                       <a href =" "  className ="ml-20" onClick = {(e)=>this.onClick(e,2)}>200.000 - 350.000 VNĐ</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,3)}>350.000 - 700.000 VNĐ</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,4)}>Trên 1 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,5)}>Tất cả</a>
                       </h4>
                       
                    </div>
                    
                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    {

                    this.props.phukien.length === 0 ? <h4 className ="ml-30">Không tìm thấy mặt hàng với giá yêu cầu</h4> :<PhuKien viewDetail ={this.props.viewDetail}/>
                     
                    } 
                    </div>
                </div>
                
              
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
     onPhuKienFilter : (num)=>{
         dispatch(action.onPhuKienFilter(num))
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
export default connect(mapStateToProps, mapDispatchToProps)(PhuKienRouter)