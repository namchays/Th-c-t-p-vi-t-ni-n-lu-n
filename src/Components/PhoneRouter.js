import React, { Component } from 'react'
import Phone from './Phone'
import { connect } from 'react-redux';
import * as action from '../Actions/index'
class PhoneRouter extends Component {
   
    componentDidMount(){
        this.props.listAllPhone()
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
                       <a href =" " className ="ml-20" onClick = {(e) =>this.onClick(e,1)}>Dưới 1 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e)=>this.onClick(e,2)}>1 - 3 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,3)}>3 - 5 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,4)}>Trên 5 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,5)}>Tất cả</a>
                       </h4>
                       
                    </div>
                    
                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    {

                    this.props.phone.length === 0 ? <h4 className ="ml-30">Không tìm thấy mặt hàng với giá yêu cầu</h4> :<Phone />
                     
                    } 
                    </div>
                </div>
                
              
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
     onFilter :  (number)=>{
         dispatch(action.onPhoneFilterRequest(number))
     },
     listAllPhone : ()=>{
         dispatch(action.actFetchProductRequest())
     }
    }
}
const mapStateToProps = (state) => {
    return {
        phone: state.phone
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhoneRouter)