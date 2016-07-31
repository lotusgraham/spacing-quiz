import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, cyan700} from 'material-ui/styles/colors';
import 'isomorphic-fetch';
import { connect } from 'react-redux';
import userActions from '../redux/actions/user';
import questionActions from '../redux/actions/question';
import Snackbar from 'material-ui/Snackbar';


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i < vars.length;i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
      return pair[1];
    }
  }
}


const styles = {
  errorStyle: {
    color: cyan700,
  }
};

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.getInput = this.getInput.bind(this);
    this.state = {
      guess: null,
      open: false
    }
  }

handleTouchTap() {
  this.setState({
    open: true,
  });
}

handleRequestClose() {
  this.setState({
    open: false,
  });
}

  handleClick() {
    // console.log(this.props.state);
    let english = this.props.state.question.english;
    let guess = this.state.guess;
    let id = this.props.state.user.id;
    this.props.dispatch(questionActions.checkAnswer(english, guess, id));
    setTimeout(() => {this.props.dispatch(questionActions.getQuestion(this.props.state.user.id))}, 250);
  }
  componentWillMount() {
    this.props.dispatch(userActions.fetchUser());
    setTimeout(() => {this.props.dispatch(questionActions.getQuestion(this.props.state.user.id))}, 500)
  }
  getInput(e) {
    // console.log(e.target.value);
    this.setState({
      guess: e.target.value
    });
  }
  render() {
    return(
    <Card style={{width: '60%',
                margin: '2rem auto'}}
                >
    <CardHeader
      title={this.props.state.user.fullName}
      subtitle="German Learnin'"
      avatar={this.props.state.user.avatar}
    />

    <CardMedia

      overlay={<CardTitle title={this.props.state.question.english} subtitle={this.props.state.question.definition} />}
      >
      <img   style={{
          height: '20rem',
          width: 'auto'
        }}
        src={this.props.state.question.image} />
    </CardMedia>
    <CardActions>
        <TextField
       hintText="Enter German Word"
       hintStyle={styles.errorStyle}
       onChange={this.getInput}
     />
   <FlatButton rippleColor="cyan"
                  labelStyle={{textTransform: 'capitalize'}}
                  style={{textAlign:'center', width:'100%'}}
                  label="Go"
                  onTouchTap={this.handleTouchTap.bind(this)}
                  onClick={this.handleClick.bind(this)}
                  />
    </CardActions>
    <Snackbar
     open={this.state.open}
     style={{textAlign:'center'}}
     message={this.props.state.question.correct}
     autoHideDuration={4000}
     onRequestClose={this.handleRequestClose.bind(this)}
   />
  </Card>
  )}
};


var mapStateToProps = function(state, props) {
  return {
    state: state
  };
};

const Container = connect(mapStateToProps)(QuestionCard);

export default Container;
