import axios from 'axios';

export async function get_user_info () {
    return axios.get(`/api/user`)

}