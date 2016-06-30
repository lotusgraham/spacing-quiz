var React = require('react');
var ReactDOM = require('react-dom');
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import QuestionCard from './QuestionCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './AppBar';
import SinglePage from './SinglePage';
import LoginPage from './LoginPage';
import {Provider} from 'react-redux'
var store = require('../store');
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)



const App = () => (
    <Provider store={store}>

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Router history={history}>
                <Route path="/" component={LoginPage}/>
                <Route path="/app" component={Singlepage}/>
            </Router>
        </MuiThemeProvider>

    </Provider>
);

ReactDOM.render(
    <App/>, document.getElementById('app'));

// console.log('test');
//
// var Person = function() {
//     var name = 'Hello Earth';
//     return (
//         <div className="person">
//             {name}
//             <CardExampleWithAvatar />
//         </div>
//     );
// };
//
// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Person />, document.getElementById('app'));
// });
