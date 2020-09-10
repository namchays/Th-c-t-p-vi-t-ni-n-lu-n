import React, { Component } from 'react'

export default class NewDetails extends Component {
    constructor(props) {
        super(props)
        this.state =({
            newShow: {}
        })
    }
    UNSAFE_componentWillMount(){
        if(localStorage && localStorage.getItem('newShow'))
        this.setState({
            newShow : JSON.parse(localStorage.getItem('newShow'))
        })
    }
    render() {
        var {newShow} = this.state;
        console.log(newShow);
        return (
            <div>
                  <ul className="breadcrumb">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/news" >News </a>
                    </li>
                    <li>
                        <a href="/news/detail" >Detail</a>
                    </li>

                </ul>
                
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <h1>{newShow.name}</h1> 
                            <img alt =" " src={newShow.img}></img>
                            <h4>{newShow.content}</h4>
                            <img alt =" " src={newShow.img2}></img>
                            <h4>{newShow.title2}</h4>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
