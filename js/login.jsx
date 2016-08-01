import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// export default class Login extends Component {
//   render() {
//     return <a href="/login">Login with Google</a>
//   }
// }

const labels = {
  margin: '10rem auto',
};

const style = {
  margin: '5rem 40%',
};

var Login = React.createClass({
  render: function() {
    return (
      <div>
          <RaisedButton bodyStyle={labels} label="Login with Google" linkButton={true} href="/login" secondary={true} style={style} />
      </div>
    );
  }
});

export default Login;



// this.props.state.question.correct
