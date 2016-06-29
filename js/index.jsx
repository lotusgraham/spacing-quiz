var React = require('react');
var ReactDOM = require('react-dom');
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import QuestionCard from './QuestionCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './AppBar';
import SinglePage from './SinglePage';
import { Provider } from 'react-redux'
var store = require('../store');



const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <SinglePage />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

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
