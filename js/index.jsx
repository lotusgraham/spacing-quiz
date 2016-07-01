var React = require('react');
var ReactDOM = require('react-dom');
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './login';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SinglePage from './SinglePage'



const routes = (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/quizstart" component={SinglePage}/>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(
  routes,
  document.getElementById('app')
);
