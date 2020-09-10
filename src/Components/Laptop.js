/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import * as action from '../Actions/index'
import { connect } from 'react-redux'
import createPrice from './../function/createPrice'
import { Link } from 'react-router-dom'
class Laptop extends Component {




    componentDidMount(){
        this.props.listAllLaptop()
    }

    onClick = (e, Product) => {
        e.preventDefault();
        this.props.addToCart(Product);
    }
    viewDetail(Product) {

        this.props.viewDetail(Product);
    }
    render() {
        var laptop = this.props.laptop;

        var element = laptop.map((product, index) => {

            return (


                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" key={product.id}>

                    <div className="card" style={{ width: '20rem', height: '29rem' }}>


                        <img alt="iphone" id="yourImgId" src={product.img} width="170px" height="130px" />
                        <div className="caption">
                            <h4 style={{ padding: 10 }} >{(product.name)}</h4>
                            <p >
                                {createPrice(product.price)} VNĐ
                          </p>
                            <p>

                                <a className="btn btn-success ml-5" href=" " onClick={(e) => this.onClick(e, product)}  >
                                    <span className="fa fa-cart-plus"></span>
                                </a>
                                <Link className="btn btn-success ml-5" to="/detail" onClick={() => this.viewDetail(product)}>
                                    <span>
                                        Xem thông tin
                                  </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>



            )

        }
        )

        return (

            <div >
                {element}
            </div>


        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (product) => {
            dispatch(action.addToCart(product))
        },
        viewDetail: (product) => {
            dispatch(action.viewProduct(product));
        },
        listAllLaptop: () => {
            dispatch(action.actFetchProductRequest())
        }
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        laptop: state.laptop
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Laptop)