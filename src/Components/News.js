import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as action from '../Actions/index'
import { Link } from 'react-router-dom';
class News extends Component {
    constructor(props) {
        super(props)
        this.state = ({


            newDetails: []
        })
    }
    componentDidMount() {
        this.props.fetchNew();

    }

    ViewNews = (ele) => {

        this.props.ViewNews(ele);
    }

    render() {

        var { news } = this.props;

        var ele = [], normal = [], hot = [];

        news.forEach((element, index) => {

            if (element.type === 'new') ele.push(element);
            if (element.type === 'normal') normal.push(element);
            if (element.type === 'hot') hot.push(element);
        })


        var eleNormal;
        var check = true;
        if (normal) {
            eleNormal = normal.map((params, index) => {
                return check === true ? (
                    <div key={index}>
                        <img src={params.img} style={{ width: 250 }} alt=" "></img>
                        <h3><Link to="/news/detail" onClick={() => this.ViewNews(params)}>{params.name} </Link></h3>
                        {check = false}
                    </div>
                ) : <h4 key={index} className="border-top-bottom" ><Link to="/news/detail" onClick={() => this.ViewNews(params)}>{params.name}</Link></h4>
            })
        }
        var eleHot;

        if (hot) {
            eleHot = hot.map((params, index) => {
                return (
                    <h3 key={index}><Link to="/news/detail" onClick={() => this.ViewNews(params)}>{params.name}</Link></h3>
                )
            })
        }
        return (
            <div>
                <ul className="breadcrumb">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news" >News </Link>
                    </li>

                </ul>

                <div className="row">
                    {this.showNew(ele)}
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        {eleNormal}
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img alt=" " src="https://cdn.tgdd.vn/2020/07/banner/publicpreview(6)-380x215.png"></img>
                        <h3 className="titlehome breadcrumb">Thảo luận nhiều</h3>
                        {eleHot}
                    </div>
                </div>


            </div>
        )
    }
    showNew = (element) => {
        var result = null;

        if (element.length > 0) {
            console.log(element);
            result = element.map((element, index) => {
                return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
                    <img src={element.img} style={{ width: 570 }} alt=" "></img>
                    <h3><Link to="/news/detail" onClick={() => this.ViewNews(element)}>{element.name}</Link></h3>
                    <h4>{element.content}</h4>
                </div>
            })
        }
        return result;

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        news: state.news
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ViewNews: (params) => {
            dispatch(action.viewNews(params))
        },
        fetchNew: () => {
            dispatch(action.actFetchNewRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)