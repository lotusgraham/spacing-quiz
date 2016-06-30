
import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, cyan700} from 'material-ui/styles/colors';
// import {initialState} from '../reducers'
import actions from '../actions'
import { connect } from 'react-redux'



// class MyButton extends FlatButton {
//   constructor(props){
//     super(props)
//     this.clickHandler = this.clickHandler.bind(this)
//   }
//   clickHandler(){
//     alert('yaaaay');
//   }
// }


// console.log(state);



const styles = {
  errorStyle: {
    color: cyan700,
  }
};

class QuestionCard extends Component {
  constructor(props) {
    super(props)
  }
  handleClick() {
    this.props.dispatch(actions.getQuestionsSuccess(this.props.mappedstate));
    // console.log(this.props.mappedstate);

    // console.log(state);
  }

  render() {
    return(
    <Card style={{width: '60%',
                margin: '2rem auto'}}
                >
    <CardHeader
      title="Graham Whitley"
      subtitle="German Learnin'"
      avatar="http://lorempixel.com/100/100/nature/"
    />

    <CardMedia
      overlay={<CardTitle title={this.props.mappedstate.english} subtitle={this.props.mappedstate.definition} />}
      >
      <img   style={{
          height: '20rem',
          width: 'auto'
        }}
        src="http://buzzsharer.com/wp-content/uploads/2015/06/beautiful-running-horse.jpg" />
    </CardMedia>
    <CardActions>
        <TextField
       hintText="Enter German Word"
       hintStyle={styles.errorStyle}
     />
   <FlatButton rippleColor="cyan"
                  labelStyle={{textTransform: 'capitalize'}}
                  style={{textAlign:'center', width:'100%'}}
                  label="Go"
                  onClick={this.handleClick.bind(this)}
                  />
    </CardActions>
  </Card>
  )}
};



var mapStateToProps = function(state, props) {
    return {
        mappedstate: state
    };
};


var Container = connect(mapStateToProps)(QuestionCard);



module.exports = Container;
