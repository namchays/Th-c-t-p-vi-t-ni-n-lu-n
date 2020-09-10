import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../Actions/index'
import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: ''
    })
  }


  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    this.setState({
      [name]: value
    })

   
  }
  onClick = () => {

    var { name } = this.state;

    this.props.onSearch(name)
  }
  render() {

    return (
      <div>

        <header className="header">
          <div className="header-wrapper">
            <div className="header-main">
              <div className="flex-row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  {/* Header logo */}
                  <div id="logo" className="flex-col logo">
                    <Link to="/" >
                      <img width={200} height={70} src="./img/logo.png" className="header_logo header-logo" alt=" " />
                    </Link>
                  </div>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 select">
                  <div className="dropdown">
                    <button className="mt-15 dropdown-toggle" type="button" data-toggle="dropdown">Chọn sản phẩm
                   <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><Link to="/">Tất cả</Link></li>
                      <li><Link to="/phone">Điện thoại</Link></li>
                      <li><Link to="/laptop">Laptop</Link></li>
                      <li><Link to="/phukien">Phụ kiện</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-15">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="name" onChange={this.onChange} />
                    <span className="input-group-btn">
                      <Link className="btn btn-success" onClick={() => this.onClick()} to="/search">
                        <span className="fa fa-search mr-5" />Tìm
                    </Link>
                    </span>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-20  cart">
                  <ul>
                    <Link to="/cart" >Giỏ hàng</Link>
                    <i className="fa fa-shopping-cart ml-5" ></i> &nbsp;
                    <Link to="/login" >Đăng nhập</Link>
                    <i className="fa fa-hotel ml-5" ></i>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

      </div>

    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearch: (name) => {
      dispatch(action.search(name))
    }
  }
}
export default connect(null, mapDispatchToProps)(Header)