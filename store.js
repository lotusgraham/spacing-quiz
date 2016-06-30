var redux = require('redux');
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
import {routerReducer} from 'react-router-redux'
import {createStore, combineReducers} from 'redux'



var reducers = require('./reducers');

const store = createStore(
  combineReducers({
    flashCardsReducer: reducers.flashCardsReducer,
    routing: routerReducer
  })
)

module.exports = store;
