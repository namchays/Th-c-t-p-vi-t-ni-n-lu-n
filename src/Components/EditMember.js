import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from './../Actions/index'
class EditMember extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            member : []
        };
    }
     
    
    componentDidMount(){
        this.props.getALLMember();
        
    }
    deleteMember = (id) =>{
       
       this.props.deleteMember(id)
    }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     if(nextProps){
    //         if(nextProps.member){
    //             this.setState({
    //                 member : nextProps.member
    //             })
    //         }
    //     }
    // }
    render() { 
        var { member } = this.props;
        var elementMember = null;
        if(member.length > 0 ){
            console.log(member);
            elementMember = member.map((element,index)=>{
               
                return (<tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>
                        {element.date}
                    </td>
                    <td>{element.gender}</td>
                    <td>{element.position}</td>
                    <td>{element.address}</td>
                    <td>{element.phone}</td>
    
                    <td><Link type="button" to = {`/member/${element.id}/edit`} className="btn btn-primary">Sửa</Link></td>
                    <td><button type="button" className="btn btn-danger" onClick = {()=>this.deleteMember(element.id)}>Xóa</button></td>
    
                </tr>)
            })
        }

        
        
        return (
            <div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="dropdown">
                                    <h4>Quản lý cửa hàng</h4>
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown">Chọn loại danh mục
                                         <span className="caret"></span></button>

                                    <ul className="dropdown-menu">
                                        <li><Link to="/edit/product" >Quản lý sản phẩm</Link></li>
                                        <li><Link to="/edit/member" >Quản lý nhân viên</Link></li>
                                        <li><Link to="/edit/new" >Quản lý trang tin tức</Link></li>
                                    </ul>
                                   
                                        <Link  className="btn btn-info fr" to='/member/add'>Thêm</Link>
                                  
                                </div>
                            </div>
                            <table className="table">
                                <thead>
                                <tr>
                                 <th>id</th>
                                 <th>Tên</th>
                                 <th>Ngày sinh</th>
                                 <th>Giới tính</th>
                                 <th>Chức vụ</th>
                                 <th>Địa chỉ</th>
                                 <th>Số điện thoại</th>
                             </tr>
                                </thead>
                                <tbody>
                                    {elementMember}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
showContent = () => {
       
    var { member } = this.props
    var result = null;
   
    console.log(member);
        
        // 
        // })
        return result;
    }
   
}


const mapStateToProps = (state, ownProps) => {
    return {
        member: state.member
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getALLMember: () => {
            dispatch(action.actFetchMemberRequest())
        },
        deleteMember : (id)=>{
            dispatch(action.actDeleteMemberRequest(id))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(EditMember)