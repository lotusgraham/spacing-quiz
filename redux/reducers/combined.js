// var combineReducers = require('redux').combineReducers;
import { combineReducers } from 'redux';

import { userReducer } from './user';
import { questionReducer } from './question';

var combined = combineReducers({
  question: questionReducer,
	user: userReducer
});

export default combined;
