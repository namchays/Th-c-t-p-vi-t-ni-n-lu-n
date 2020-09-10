import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    
    render() {
      
        return (
                <div>
                <div className="container mt-5 Container">
                    <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 DIV">
                        <div><span className="fa fa-phone mr-5" /> DANH MỤC CỬA HÀNG</div>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 tab">
                        <span className="fa fa-home mr-5" />
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 tab">
                        <span className="fa fa-address-card mr-5" />
                        <Link to="/news" >Tin tức</Link>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 tab">
                        <span className="fa fa-user mr-5" />
                        <Link to="/member">Nhân viên</Link>
                    </div>
                  
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 tab">
                        <span className="fa fa-user mr-5" />
                        <Link to=" ">Trả góp 0%</Link>
                    </div>
                  
                    </div>
                </div>
                </div>

        )
    }
}
