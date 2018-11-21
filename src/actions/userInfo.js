
import types from '../store/types';
import {
    get_user_info
} from '../api/userInfo'
export function getUserInfo() {
    return  {
        type: types.GET_USER_INFO_REQUEST,
        payload: {
            promise: get_user_info().then((data)=>{
                console.log(13,data.data)
                return data.data;
            })
        }
        // promise: client => client.get(`http://8000/api/user`),
    }
}