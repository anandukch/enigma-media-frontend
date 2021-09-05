import { combineReducers } from 'redux';

import postReducer from './posts';
import authReducer from './auth';

const reducers = combineReducers({ posts:postReducer, user:authReducer });
export default reducers;