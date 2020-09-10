import React, { Component } from 'react';
import * as action from './../Actions/index'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Edit extends Component {

    componentDidMount() {

        this.props.getALLNews()
    }
    onDelete = (event,id)=>{
        this.props.deleteNew(id) 
        console.log(id);
    }
    render() {


        console.log(this.props.news);

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

                                        <Link type="button" className="btn btn-info fr" to='/news/add'>Thêm</Link>

                                    </div>
                                </div>
                                <table className="table">
                                    <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Tên</th>
                                    <th>Hình ảnh</th>
                                    <th>Nội dung</th>
                                    <th>Loại</th>
                                </tr>
                                    </thead>
                                    <tbody>
                                        {this.showContent()}
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

        var { news } = this.props
        var result = null;
        result = news.map((New, index) => {
            
            return New ? <tr key={index}>
                <td>{New.id}</td>
                <td>{New.name}</td>
                <td>
                    <img src={New.img} alt=" " style={{ width: 60, height: 60 }}></img>
                </td>
                <td>{New.title2}</td>
                <td>
                    <img src={New.img2} alt=" " style={{ width: 60, height: 60 }}></img>
                </td>
                <td>{New.content}</td>
                <td>{New.type}</td> 

                <td><Link type="button" to={`/news/${New.id}/edit`} className="btn btn-primary">Sửa</Link></td>
                <td><button type="button" className="btn btn-danger" onClick = {(event)=>this.onDelete(event,New.id)}>Xóa</button></td>

            </tr> : <tr key = {index}><td>Tin lỗi</td></tr>;
        })
        return result
    }
}



const mapStateToProps = (state, ownProps) => {
    return {

        news: state.news,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        getALLNews: () => {
            dispatch(action.actFetchNewRequest())
        },
        deleteNew : (id)=>{
            dispatch(action.actDeleteNewRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)