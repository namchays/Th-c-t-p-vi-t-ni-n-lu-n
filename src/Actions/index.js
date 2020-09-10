import * as Types from '../Constants/ActionTypes'
import callApi from './../utils/apiCaller'

export const addToCart = (product)=>{
    return {
        type : Types.ADD_TO_CART,
        product
    }
}


export const addQuantity = (cart)=>{
    return {
        type : Types.ADD_QUANTITY,
        cart
        
    }
}
export const onSubtract = (cart)=>{
    return {
        type : Types.ON_SUBTRACT,
        cart
        
    }
}
export const deleteCart = (cart)=>{
    return {
        type : Types.DELETE_CART,
        cart
        
    }
}
export const onPhoneFilterRequest = (number)=>{
    return dispatch =>{
        callApi('GET', 'products', null).then(res =>{
            dispatch(onPhoneFilter(number,res.data))
        })
    }
}

export const onPhoneFilter = (number,phone)=>{
    return {
        type : Types.ON_PHONE_FILTER,
        number,
        phone
        
    }
}
export const onLaptopFilter = (number)=>{
    return {
        type : Types.ON_LAPTOP_FILTER,
        number
        
    }
}
export const onPhuKienFilter = (number)=>{
    return {
        type : Types.ON_PHUKIEN_FILTER,
        number
        
    }
}
export const search = (name)=>{
    return {
        type : Types.SEARCH,
        name
        
    }
}
export const viewNews = (news)=>{
    return {
        type : Types.VIEW_NEWS,
        news
        
    }
}
export const viewProduct = (product)=>{
    return {
        type : Types.VIEW_PRODUCT,
        product
        
    }
}

export const actFetchProduct = (products)=>{
    return {
        type : Types.ACT_FETCH_PRODUCT,
        products
    }
}
export const actFetchProductRequest = ()=>{
    return dispatch =>{
        callApi('GET','products',null).then(res =>{
            dispatch(actFetchProduct(res.data))
        })
     
    }
}
export const actFetchMember = (member)=>{
    return {
        type : Types.ACT_FETCH_MEMBER,
        member
    }
}
export const actFetchMemberRequest = ()=>{
    return dispatch =>{
        callApi('GET','members',null).then(res =>{
            dispatch(actFetchMember(res.data))
        })
     
    }
}

export const actFetchNew = (news)=>{
    return {
        type : Types.ACT_FETCH_NEWS,
        news
    }
}
export const actFetchNewRequest = (news)=>{
    return dispatch =>{
        callApi('GET','news',null).then(res =>{
            
            dispatch(actFetchNew(res.data))
        })
    }
}
export const actAddMember = (member)=>{
    return {
        type : Types.ACT_ADD_MEMBER,
        member
    }
}
export const actAddMemberRequest = (member)=>{
    return  dispatch =>{
        callApi('POST','members',{
            name : member.name,
            date : member.date,
            gender : member.gender,
            position : member.position,
            address : member.address,
            phone : member.phone
        }).then(res =>{
            dispatch(actAddMember(res.data))
        })
    }
}

export const actEditMember = (member)=>{
    return {
        type : Types.ACT_EDIT_MEMBER,
        member
    }
}

export const actEditMemberRequest = (member)=>{
    return dispatch =>{
        callApi('PUT', `members/${member.id}`,{
            name : member.name,
            date :member.date,
            gender : member.gender,
            position : member.position,
            address : member.address,
            phone : member.phone
        }).then(res =>{
            dispatch(actEditMember(res.data))
            console.log(res.data);
        })
    }
}

export const actDeleteMember = (id)=>{
    return {
        type : Types.ACT_DELETE_MEMBER,
        id
    }
}

export const actDeleteMemberRequest = (id)=>{
    
    return dispatch =>{
        callApi('DELETE',`members/${id}`,null).then(res =>{
            dispatch(actDeleteMember(id));
        })
    }
}

export const actGetAccountRequest = ()=>{
    return dispatch =>{
        callApi('GET', 'account', null).then(res =>{
            dispatch(actGetAccount(res.data))
           
        })
    }
}
export const actGetAccount = (account)=>{
    return {
        type : Types.GET_ACCOUNT,
        account

    }
}

export const actAddNewRequest = (New) =>{
    return dispatch =>{
        callApi('POST','news',{
            
            name : New.name,
            img : New.img,
            content : New.content,
            type : 'new',
            title2 : New.title2,
            img2 : New.img2
        }).then(res =>{
            dispatch(actAddNew(res.data))
        })
    }
}

export const actAddNew = (New) =>{
    return{
        type : Types.ACT_ADD_NEW,
        New

    }
}

export const actEditNewRequest = (New)=>{
    return dispatch =>{
        callApi('PUT',`news/${New.id}`,{
            name  : New.name,
            img : New.img,
            content : New.content,
            type : New.type,
            title2 : New.title2,
            img2 : New.img2,
        }).then(res =>{
            dispatch(actEditNew(res.data))
            console.log(res.data);
        })
    }
}

export const actEditNew = (New)=>{
    return {
        type : Types.ACT_EDIT_NEW,
        New
    }
}

export const actDeleteNewRequest = (id)=>{
    return  dispatch => {
        callApi('DELETE',`news/${id}`,null).then(res =>{
            dispatch(actDeleteNew(id))
            
        })
    }
}

export const actDeleteNew = (id)=>{
    return {
        type : Types.ACT_DELETE_NEW,
        id
    }
}