var React = require('react');
var ReactDOM = require('react-dom');
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import QuestionCard from './QuestionCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './login';
import { Router, Route, Link, browserHistory } from 'react-router'

const routes = (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Router history={browserHistory}>
      <Route path="/" component={Login}/>
      <Route path="/quizstart" component={QuestionCard}/>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  routes,
  document.getElementById('app')
);
