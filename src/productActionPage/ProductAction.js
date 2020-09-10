import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../Actions/index'
class ProductAction extends Component {
    componentDidMount(){
        this.props.getAllProduct()
    }
    render() {

        var { match, } = this.props;
        var form = null;
      
        if (match.params.id) {
            form = <form >
                <h3>Sửa sản phẩm</h3>

                <div className="form-group">
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                </div>
            </form>
        } else {
           form = <form >
                <h3>Thêm sản phẩm</h3>

                <div className="form-group">
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                    <label >label</label>
                    <input type="text"
                        className="form-control"

                        placeholder="Input field"

                    />
                </div>
            </form>
        }
        console.log(this.props.match.params.id);
        return (
            <div>

                <div className="container ">

                    <div className="row">

                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                        </div>

                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                            {form}

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllProduct: () => {
            dispatch(action.actFetchProductRequest())
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductAction)