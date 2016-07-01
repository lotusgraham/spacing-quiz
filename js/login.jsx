import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// export default class Login extends Component {
//   render() {
//     return <a href="/login">Login with Google</a>
//   }
// }



const style = {
  margin: 12,
};

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <Card style={{width: '60%',
                    margin: '2rem auto'}}
            containerStyle={{margin: '5rem'}}>
          <RaisedButton label="Login with Google" linkButton={true} href="/login" secondary={true} style={style} />
        </Card>
      </div>
    );
  }
});

export default Login;



// this.props.state.question.correct
