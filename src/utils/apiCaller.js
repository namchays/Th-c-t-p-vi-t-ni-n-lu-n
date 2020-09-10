import axios from 'axios'
export default function callApi (method='GET', endpoint, data){
    return  axios({
        method : method,
        url : `http://localhost:3000/${endpoint}`,
        data : data
    }).catch(error =>{
        console.log(error);
    })
}