import React from 'react'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import News from './Components/News'
import NewDetails from './Components/NewDetails'
import Member from './Components/Member'
import Search from './Components/Search'
import LaptopRouter from './Components/LaptopRouter'
import PhoneRouter from './Components/PhoneRouter'
import PhuKienRouter from './Components/PhuKienRouter'
import LoginForm from './Components/LoginForm'
import NotFound from './Components/NotFound'

import NewAction from './Components/NewAction'
import MemberAction from './Components/MemberAction'
import EditProduct from './Components/EditProduct'
import EditMember from './Components/EditMember'
import EditNew from './Components/EditNew'
import ProductAction from './productActionPage/ProductAction'

const routers = [
    {
        path : '/',
        exact : true,
        main : () => <Products/>
    },
    {
        path : '/cart',
        exact : false,
        main : () => <Cart />
    },
    {
        path : '/detail',
        exact : false,
        main : () =><ProductDetails/>
    },
    {
        path : '/news',
        exact : true,
        main : () =><News/>
    },
    {
        path : '/news/detail',
        exact : false,
        main : () =><NewDetails/>
    },
    {
        path : '/member',
        exact : true,
        main : () =><Member/>
    },
    {
        path : '/search',
        exact : false,
        main : () =><Search/>
    },
    {
        path : '/phone',
        exact : false,
        main : () =><PhoneRouter/>
    },
    {
        path : '/laptop',
        exact : false,
        main : () =><LaptopRouter/>
    },
    {
        path : '/phukien',
        exact : false,
        main : () =><PhuKienRouter/>
    },
    {
        path : '/login',
        exact : false,
        main : ( location ) =><LoginForm location = {location}/>
    },
    {
        path : '/edit/product',
        exact : false,
        main : () =><EditProduct />
    },
    {
        path : '/edit/member',
        exact : false,
        main : () =><EditMember />
    },
    {
        path : '/edit/new',
        exact : true,
        main : () =><EditNew />
    },
    {
        path : '/product/add',
        exact : false,
        main : ({match}) =><ProductAction match = {match}/>
    },
    {
        path : '/news/add',
        exact : false,
        main : ({match, history}) =><NewAction history = {history} match = {match}/>
    },
    {
        path : '/member/add',
        exact : false,
        main : ({match, history}) =><MemberAction match = {match} history = {history}/>
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({match}) =><ProductAction match = {match}/>
    },
    {
        path : '/member/:id/edit',
        exact : false,
        main : ({match, history}) =><MemberAction match = {match} history = {history}/>
    },
    {
        path : '/news/:id/edit',
        exact : false,
        main : ({match, history}) =><NewAction match = {match} history = {history}/>
    },
    {
        path : '',
        exact : false,
        main : () =><NotFound/>
    },

]






export default routers