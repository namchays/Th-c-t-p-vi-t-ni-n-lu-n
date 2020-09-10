import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from './../Actions/index'

 class Member extends Component {
    
    componentDidMount(){
        this.props.getAllMember()
    }

    render() {
        var { member } = this.props;
        var element = member.map((ele, index) => {
            return (
                <tbody key={index}>

                    <tr>
                        <td>{index + 1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.date}</td>
                        <td>{ele.gender}</td>
                        <td>{ele.address}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.position}</td>
                    </tr>
                </tbody>
            )
        })
        return (
            <div>


                <div className="container">

                    <div className="row">
                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                            <ul className="breadcrumb mt-20">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/member" >Nhân viên </a>
                                </li>

                            </ul>
                            <table className="table table-hover mt-20 border">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Họ Tên</th>
                                        <th>Ngày Sinh </th>
                                        <th>Giới tính</th>
                                        <th>Địa Chỉ</th>
                                        <th>SĐT</th>
                                        <th>Chức vụ</th>
                                    </tr>
                                </thead>

                                {element}
                            </table>

                        </div>

                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">

                        </div>

                    </div>

                </div>




            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        member: state.member
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllMember: () => {
            dispatch(action.actFetchMemberRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Member)