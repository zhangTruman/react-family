import types from '../store/types';
import { reducerCreators } from '../util/index';
/**
 * 初始化state
 */

 const initState = {
     count: 0
 }

 /**
  * reducer
  */

export default reducerCreators(initState ,{
   [`${types.INCREMENT}`]: (state,data) => {
    return Object.assign({}, state, {
        count: state.count+1,
    })
   },
   [`${types.DECREMENT}`]: (state,data) => {
    return Object.assign({}, state, {
        count: state.count-1,
    })
   },
   [`${types.RESET}`]: (state,data) => {
    return Object.assign({}, state, {
        count: 0,
    })
   },
});