import React, { Component } from 'react';
import { connect } from 'react-redux';
 import * as action from './../Actions/index'
class NewAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name  : '',
            img : '',
            type : '',
            content : '',
            title2 : '',
            img2 : '',
        };
    }
     
    onGoBack = ()=>{
        var {history} = this.props;
        if(history){
            history.goBack();
        }
    }
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })

    }
    componentDidMount(){
        this.props.getNews();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        var {match} = this.props;
        var element = null;
        var news = nextProps.news;
        console.log(nextProps);
        if(news.length > 0 && match.params.id){
            
            news.forEach((e, index)=>{
                if(e)
                if(e.id === parseInt(match.params.id)){
                    
                   return element = e;
                }
            })
        }
      
        if(match.params.id){
            
            this.setState({
            name  : element.name,
            img : element.img,
            content : element.content,
            title2 : element.title2,
            img2 : element.img2,
            type : element.type
            })
        }
        
    }
    onSubmitForm = (event)=>{
        event.preventDefault();
        var {match,history} = this.props;
        var {name,img,img2,content,title2,type} = this.state
        var data = {
            id : match.params.id,
            name  : name,
            img : img,
            content : content,
            type : type ? type : 'new',
            title2 : title2,
            img2 : img2,
        }
        if(match.params.id){
           console.log(2);
            this.props.editNews(data)
            }else {
                this.props.addNews(data)
      
        }
         history.goBack();
                
    }
    render() { 
        var {name,img,img2,content,title2} = this.state
        var {match} = this.props;
        return (
            <div>

            <div className="container">

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                </div>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">


                        <form className=" mt-15" onSubmit = {this.onSubmitForm}>
                            <h1>{match.params.id ? 'Sửa Tin Tức' : 'Thêm Tin Tức'}</h1>

                   
                            <div className="form-group">
                                <label >Tiêu đề</label>
                                <textarea 
                                name = "name"
                                type="text" 
                                className="form-control"  
                                placeholder="Nhập tiêu đề..."
                                onChange = {this.onChange}
                                value = {name}
                                />
                                <label >Hình ảnh 1</label>
                                <input 
                                name = "img"
                                type="text" 
                                className="form-control"  
                                placeholder="Nhập src hình ảnh..."
                                onChange = {this.onChange}
                                value = {img}
                                />
                                <label >Nội dung</label>
                                <textarea
                                rows = {12} 
                                name = "content"
                                type="text" 
                                className="form-control"  
                                placeholder="Nhập nội dung..." 
                                onChange = {this.onChange}
                                value = {content}
                                />

                                <label >Tiêu đề 2</label>
                                <textarea
                                rows = {10} 
                                name = "title2"
                                type="text" 
                                className="form-control"  
                                placeholder="Nhập tiêu đề 2..."
                                onChange = {this.onChange}
                                value = {title2}
                                 />
                                
                                <label >Hình ảnh 2</label>
                                <input 
                                name = "img2"
                                type="text" 
                                className="form-control"  
                                placeholder="Nhập  src hình ảnh..."
                                onChange = {this.onChange} 
                                value = {img2}
                                />
                            
                            </div>



        <button type="submit" className="btn btn-primary">{match.params.id ? "Sửa Tin Tức" : 'Thêm Tin Tức'}</button> &nbsp;
        
        <button type="button" className="btn btn-danger" onClick = {this.onGoBack}>Quay lại</button>
        
                        </form>


                    </div>
                </div>

            </div>

        </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNews: (New) => {
            dispatch(action.actAddNewRequest(New))
        },
        getNews : ()=>{
            dispatch(action.actFetchNewRequest())
        },
        editNews : (New) =>{
            dispatch(action.actEditNewRequest(New))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        news: state.news
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewAction)