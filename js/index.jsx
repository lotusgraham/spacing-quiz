var React = require('react');
var ReactDOM = require('react-dom');
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import QuestionCard from './QuestionCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './login';
import { Router, Route, Link, browserHistory } from 'react-router'

const routes = (
  <Router history={browserHistory}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Route path="/" component={Login}/>
      <Route path="/quizstart" component={QuestionCard}/>
    </MuiThemeProvider>
  </Router>
)

// const App = () => (
//   <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
//       <Login />
//   </MuiThemeProvider>
// );

ReactDOM.render(
  routes,
  document.getElementById('app')
);
