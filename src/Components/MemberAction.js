import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../Actions/index'
class MemberAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName : '', 
            txtDate : '',
            txtGender : '',
            txtAddress : '',
            txtPhone : '',
            txtPosition : '',
        };
    }
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    componentDidMount(){
        this.props.fetchMember();
        
    }

    UNSAFE_componentWillReceiveProps(nextProps){
       
        var {match} = nextProps;
        var members = nextProps.members;
        var data = null;
        members.forEach((element,index)=>{
          
            if(element.id === parseInt(match.params.id) ){
              
               return data = element;
            }
        })
      
        if(match.params.id){
           
            this.setState({
            txtName : data.name, 
            txtDate : data.date,
            txtGender : data.gender,
            txtAddress : data.address,
            txtPhone : data.phone,
            txtPosition : data.position, 
            })
        }
        
     
    }
    onSubmit = (event)=>{
        event.preventDefault()
        var {match, history} = this.props;
        var { txtName,txtDate, txtGender,txtPosition,txtAddress,txtPhone } = this.state;
        var member = {
            id : match.params.id,
            name : txtName,
            date : txtDate,
            gender : txtGender,
            position : txtPosition,
            address : txtAddress,
            phone : txtPhone
        }
      
        if(match.params.id){
            this.props.editMember(member)
        }else{
            this.props.addMember(member);
            
        }
        history.goBack()
    }
    onGoBack = ()=>{
        var {history} = this.props;
        if(history){
            history.goBack()
        }
    }
    render() {
        
        var { match } = this.props;
        var {txtName,txtDate,txtGender,txtPhone,txtPosition,txtAddress} = this.state;
        console.log(this.state);
        return (
            <div>

                <div className="container">

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">


                            <form className=" mt-15" onSubmit = {this.onSubmit}>
                                <h1>{match.params.id ? 'Sửa Nhân Viên' : 'Thêm nhân viên'}</h1>

                                <div className="form-group">
                                    <label >Họ tên</label>
                                        <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange = {this.onChange} 
                                    placeholder="Nhập họ tên..." 
                                    name="txtName"  
                                    value = {txtName} />
                                    <label >Ngày Sinh</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange = {this.onChange} 
                                    placeholder="Nhập ngày sinh..." 
                                    name="txtDate" 
                                    value = {txtDate} />
                                    <label >Giới tính</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange = {this.onChange} 
                                    placeholder="Nhập giới tính..." 
                                    name="txtGender" 
                                    value = {txtGender} />
                                    <label >Địa chỉ</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange = {this.onChange} 
                                    placeholder="Nhập địa chỉ..." 
                                    name="txtAddress" 
                                    value = {txtAddress} />
                                    <label >Số điện thoại</label>
                                    <input 
                                    
                                    type="text" 
                                    className="form-control" 
                                    onChange = {this.onChange} 
                                    placeholder="Nhập số điện thoại..." 
                                    name="txtPhone" 
                                    value = {txtPhone} />
                                    <label >Chức vụ</label>
                                    <input 
                                   
                                    type="text" 
                                    className="form-control" 
                                    onChange = {this.onChange} 
                                    placeholder="Nhập chức vụ..."
                                    name="txtPosition" 
                                    value = {txtPosition} />
                                </div>



        <button type="submit" className="btn btn-primary">{match.params.id ?  "Sửa nhân viến" : "Thêm nhân viên"}</button> &nbsp;
        
        <button type="button" className="btn btn-danger" onClick = {this.onGoBack}>Quay lại</button>
        
                            </form> 


                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        members: state.member
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchMember : ()=>{
            dispatch(action.actFetchMemberRequest())
        },
        addMember: (member) => {
            dispatch(action.actAddMemberRequest(member))
        },
        editMember: (member) => {
            dispatch(action.actEditMemberRequest(member))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberAction)