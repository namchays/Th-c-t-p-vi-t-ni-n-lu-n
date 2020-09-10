import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from './../Actions/index'
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPassword: '',
            check : false
        };
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
      
    }
    componentDidMount(){
        this.props.getAccount();
        
    }
    onSave = (event) =>{
        event.preventDefault();
       
        var {txtName, txtPassword} = this.state;
        var {account} = this.props;
       
        if(account){
           
            if( txtName===account.name && txtPassword===account.password ){
                console.log(this.state);
                this.setState({
                    check : true
                })
             }   
        }
        
    }
    render() {
        console.log(this.props);
        var {txtName, txtPassword,check} = this.state;
        if(check){
            return <Redirect to={{pathname: 'edit/product',
                
                }}/>
        }
        return (
            <div style={{ height: 1000, backgroundColor: 'pink' }}>
                <div className="container-fluid" >
                    <div className="row-fluid">
                        <div className="col-md-offset-4 col-md-4" id="box">
                            <h2 className="text-center">Đăng nhập</h2>
                            <hr />
                            <form className="form-horizontal"  onSubmit = {this.onSave}>
                                <fieldset>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-user" />
                                                </span>
                                                <input
                                                    name="txtName"
                                                    placeholder="Username"
                                                    className="form-control"
                                                    type="text"
                                                    onChange={this.onChange}
                                                    value = {txtName}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-lock" />
                                                </span>
                                                <input
                                                    name="txtPassword"
                                                    placeholder="Password"
                                                    className="form-control"
                                                    type="password"
                                                    onChange={this.onChange}
                                                    value = {txtPassword}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-md btn-danger pull-right">Đăng nhập </button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        );

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        account: state.account
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAccount: () => {
            dispatch(action.actGetAccountRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)