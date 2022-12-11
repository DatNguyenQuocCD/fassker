import {combineReducers} from 'redux';

import {getPostSlice} from './Posts/slices';

const rootReducer = combineReducers({
  getPostsToolKitReducer: getPostSlice.reducer,
});

export default rootReducer;