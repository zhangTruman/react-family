
import types from '../store/types';
import { reducerCreators } from '../util/index';
const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};

export default reducerCreators(initState, {
    [`${types.GET_USER_INFO_REQUEST}_SUCCESS`]: (state,data) => {
        console.log(12,data)
        return Object.assign({}, state, {
            userInfo: data
        })
    }
})
