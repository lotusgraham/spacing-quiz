import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, cyan700} from 'material-ui/styles/colors';
import 'isomorphic-fetch';
// class MyButton extends FlatButton {
//   constructor(props){
//     super(props)
//     this.clickHandler = this.clickHandler.bind(this)
//   }
//   clickHandler(){
//     alert('yaaaay');
//   }
// }

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
  handleClick() {
    console.log('clicked');
  }
  componentWillMount() {
    var headers = new Headers({
      Authorization: 'Bearer ' + getQueryVariable('accessToken')
    })
    fetch('/userdetails', {headers: headers}).then(function(res) {
      return res.json();
    }).then(function(user) {
      console.log(user);
    })
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

      overlay={<CardTitle title={question.english} subtitle={question.definition} />}
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
                  onClick={this.handleClick}
                  />
    </CardActions>
  </Card>
  )}
};


let question = {
        question_pos: 2,
        german: "Pferd",
        english: "Horse",
        definition: "A quadripedal animal which may or may not kick you to death."
    }

export default QuestionCard;
