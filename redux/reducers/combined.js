var combineReducers = require('redux').combineReducers;

var user = require('./user').userReducer;
var question = require('./question').questionReducer;

var reducers = combineReducers({
  question: question,
	user: user
});

exports.reducers = reducers;
