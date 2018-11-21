import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from '../reducers/reducers';
// import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from './middleware/promiseMiddleware';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
// const localRouterMiddleware = routerMiddleware(history);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const arr = [promiseMiddleware];
if (process.env.NODE_ENV !== 'pro') arr.push(createLogger(
  {
    diff:true,
    collapsed: true,
  }
));
let store = createStore(combineReducers,applyMiddleware(...arr));

export default store;