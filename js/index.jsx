var React = require('react');
var ReactDOM = require('react-dom');
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import QuestionCard from './QuestionCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <QuestionCard />
  </MuiThemeProvider>
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
