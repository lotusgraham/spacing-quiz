var actions = require('./actions');
var store = require('./store');

store.dispatch(actions.getQuestions(2));

console.log(store.getState());
