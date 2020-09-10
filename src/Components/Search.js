import React, { Component } from 'react';
import * as action from './../Actions/index'
import ItemSearch from './ItemSearch';
import { connect } from 'react-redux';
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: '',
           
        })
    }
    componentDidMount(){
        this.props.getProducts()
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){
        
        if(localStorage && localStorage.getItem('search')){
            this.setState({ 
                name : JSON.parse(localStorage.getItem('search')),
                
            })
           
        }
       
        
    }
    
    render() {
     var {products} = this.props;
     console.log(products);
     var {name} = this.state;
    
     var item = products.filter(ele => ele.name.toLocaleLowerCase().search(name.toLocaleLowerCase()) >=0)
    
 
        return (
            <div>
                
                <div className ="container">
                <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone mt-20">
                            <div><span className="fa fa-search mr-5" />Kết quả tìm kiếm</div>
                            
                        </div>
                        <ItemSearch products ={item}></ItemSearch>
                    </div>
                      {item.length === 0 ? <h3 className ="text-center">Không tìm thấy kết quả yêu cầu</h3> : <div></div>}
                </div>
                
                  
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProducts: () => {
            dispatch(action.actFetchProductRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps )(Search)
