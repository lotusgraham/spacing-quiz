var actions = require('./actions');
var store = require('./store');

store.dispatch(actions.getQuestions());

console.log(store.getState());
