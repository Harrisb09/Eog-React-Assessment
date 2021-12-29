import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './root-reducer';

// 1. Creating redux store
// 2. Passing root-reducer (created using combineReducer)
// 3. Applying redux-thunk middleware
export default createStore(reducer, applyMiddleware(thunk));
