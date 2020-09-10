import React, { Component } from 'react';
import * as action from './../Actions/index'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class EditProduct extends Component {
   
    componentDidMount(){
       
        this.props.listAll();
       
    }

    render() {


        

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
                                       
                                            <Link type="button" className="btn btn-info fr" to = '/product/add'>Thêm</Link>
                                      
                                    </div>
                                </div>
                                <table className="table">
                                    <thead>
                                        {this.showHead()}
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
       
        var { products} = this.props
        var result = null;
       
            result = products.map((product, index) => {
                return <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                        <img src={product.img} alt=" " style={{ width: 60, height: 60 }}></img>
                    </td>
                    <td>{product.price}</td>
                    <td>{product.type}</td>

                    <td><Link type="button" to = {`/product/${product.id}/edit`} className="btn btn-primary">Sửa</Link></td>
                    <td><button type="button" className="btn btn-danger">Xóa</button></td>

                </tr>
            })
     
       
        return result
    }

    showHead = () => {

        var result = null;

      
            result = <tr>
                <th>id</th>
                <th>Tên</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Loại</th>
            </tr>
     
       
        return result
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        member: state.member,
        news: state.news,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        listAll: () => {
            dispatch(action.actFetchProductRequest())
        },
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)