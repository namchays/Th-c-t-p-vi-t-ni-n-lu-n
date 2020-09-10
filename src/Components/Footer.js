import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div className="mt-20">
        <table className="table table-hover">
          <thead>
            <tr>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
            </tr>
          </tbody>
        </table>

        <div className="container ">
          <div className="row text-align-center ">
            <h1 className="">Liên hệ</h1>
          </div>
          <form>
            <h2>Thông tin liên hệ</h2>
            <div className="form-group">
              <label>Tên</label>
              <input type="text" className="form-control" placeholder="Nhập tên..." />
              <label>Địa chỉ</label>
              <input type="text" className="form-control" placeholder="Nhập Địa Chỉ..." />
              <label>Số điện thoại</label>
              <input type="text" className="form-control" placeholder="Nhập Số điện thoại..." />
              <label>Phản hồi</label>
              <textarea className="form-control" rows={3} required="required" placeholder="Thông tin phản hồi..." defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary">Gửi phản hồi</button>
          </form>
        </div>
 
</div>


    )
  }
}
