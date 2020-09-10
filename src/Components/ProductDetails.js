import createPrice from './../function/createPrice'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../Actions/index'
class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            product: {}
        })
    }
    onClick = (e, params) => {
        e.preventDefault();
        this.props.addToCart(params);
    }
    UNSAFE_componentWillMount() {
        if (localStorage && localStorage.getItem('productShow')) {
            var product = JSON.parse(localStorage.getItem('productShow'));
            this.setState({ product: product })

        }
    }
    onPay = (e,params) => {
        e.preventDefault();
        this.props.onBuy(params);
    }
    render() {
        var { product } = this.state;
        var table;
        if(product.type === 'phukien' )
         table = (
            <table className="table table-hover">
         
                <thead>
                                <tr>
                                    <th>Nhà Sản Xuất</th>
                                    <th>{product.NSX}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kích Thước</td>
                                    <td>{product.size}</td>
                                </tr>
                                <tr>
                                    <td>Thời gian bảo hành</td>
                                    <td>{product.BaoHanh}</td>
                                </tr>
                                <tr>
                                    <td>Thương hiệu</td>
                                    <td>{product.ThuongHieu}</td>
                                </tr>
                              
                            </tbody>
            </table>
        );
        else{
           table = (
                <table className="table table-hover">
             
                    <thead>
                                    <tr>
                                        <th>CPU</th>
                                        <th>{product.CPU}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{product.display}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{product.OS}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera</td>
                                        <td>{product.camera}</td>
                                    </tr>
                                    <tr>
                                        <td>Bộ nhớ</td>
                                        <td>{product.memory}</td>
                                    </tr>
                                </tbody>
                </table>
            );
        }
        var ele = (
            <div>
                <ul className="breadcrumb">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href={"/"+product.type}>{product.type} </a>
                    </li>
                    <li>
                        <a href=" ">{product.name} </a>
                    </li>
                </ul>
        <h4> {product.type ==='phone'? 'Điện thoại': 'Laptop'}  {product.name} : {createPrice(product.price)} VNĐ
                    <div className="stars">
                        <form >
                            <input className="star star-5" id="star-5" type="radio" name="star" />
                            <label className="star star-5" htmlFor="star-5"></label>
                            <input className="star star-4" id="star-4" type="radio" name="star" />
                            <label className="star star-4" htmlFor="star-4"></label>
                            <input className="star star-3" id="star-3" type="radio" name="star" />
                            <label className="star star-3" htmlFor="star-3"></label>
                            <input className="star star-2" id="star-2" type="radio" name="star" />
                            <label className="star star-2" htmlFor="star-2"></label>
                            <input className="star star-1" id="star-1" type="radio" name="star" />
                            <label className="star star-1" htmlFor="star-1"></label>
                        </form>
                    </div>

                </h4>



                <div className="row mt-20 ">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 border">
                        <img src={product.img} style={{ height: product.type === 'phone' ? 350 : 270 }} alt=" "></img>
                        <a className={product.type==='phone'?"btn btn-success CartBtn":"btn btn-success LaptopBtn" } href=" " onClick={(event) => this.onClick(event, product)}  > Thêm vào giỏ hàng
                                  <span className="fa fa-cart-plus"></span>
                        </a>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <h4>{product.description}</h4>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h4 className="text-center">Thông số kĩ thuật</h4>
                      
                            {table}
                      
                        <a className="btn btn-primary buy" href=" "  onClick = {(e) =>this.onPay(e,product)} > Mua hàng
                             
                        </a>
                    </div>
                </div>






            </div>
        );
        return (
            <div>
                {ele}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (product) => {
            dispatch(action.addToCart(product))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductDetails)