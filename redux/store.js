var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

import combined from './reducers/combined';

var store = createStore(combined, applyMiddleware(thunk));

module.exports = store;
