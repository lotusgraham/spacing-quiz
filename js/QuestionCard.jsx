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
    this.props.dispatch(actions.getQuestionsSuccess(this.props.mappedstate.questions, this.props.mappedstate.count));
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
      overlay={<CardTitle title={this.props.mappedstate.questions.english} subtitle={question[0].definition} />}
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



var question = [
    {
        question_pos: 1,
        german: "Apfel",
        english: "Apple",
        definition: "A  round fruit; probably Snow White's least favorite food.",
        image: "https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg"
    },
    {
        question_pos: 2,
        german: "Pferd",
        english: "Horse",
        definition: "A quadripedal animal which may or may not kick you to death.",
        image: "http://buzzsharer.com/wp-content/uploads/2015/06/beautiful-running-horse.jpg"
    },
    {
        question_pos: 3,
        german: "Geld",
        english: "Gold",
        definition: "A precious mineral. Also a slang term for money.",
        image: "http://gold4power.com/wp-content/uploads/2016/02/gold.jpg"
    },
    {
        question_pos: 4,
        german: "Banane",
        english: "Banana",
        definition: "A curved yellow fruit favored by apes, monkeys and sometimes people.",
        image: "http://www.theartofdoingstuff.com/wp-content/uploads/2013/03/Banana.jpg"
    },
    {
        question_pos: 5,
        german: "Essen",
        english: "To eat",
        definition: "To deliver essential nutrients into one's body.",
        image: "http://www.healthline.com/hlcmsresource/images/News/childrens-health/022315_peanut_BODY.jpg"
    },
    {
        question_pos: 6,
        german: "Schlafen",
        english: "To sleep",
        definition: "To konk out, if you will.",
        image: "http://healthexpedia.com/wp-content/uploads/2016/03/bbbdb_5-Ways-to-Sleep-Better-Every-Night-700x600.jpg"
    }
]



var mapStateToProps = function(state, props) {
    return {
        mappedstate: state
    };
};


var Container = connect(mapStateToProps)(QuestionCard);



module.exports = Container;
