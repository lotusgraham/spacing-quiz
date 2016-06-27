import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const QuestionCard = () => (
    <Card style={{width: '80%',
                margin: '0 auto'}}
                actAsExpander={true}>
    <CardHeader
      title="Graham Whitley"
      subtitle={language[0]}
      avatar="http://lorempixel.com/100/100/nature/"
    />

    <CardMedia
      overlay={<CardTitle title={question.text} subtitle={language[0]} />}
    >
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    {/*<CardTitle title="Card title" subtitle="Card subtitle" />*/}
    {/*<CardText>
  {question.text}
    </CardText>*/}
    <CardActions>
      <FlatButton rippleColor="tomato" labelStyle={{textTransform: 'capitalize'}} style={{textAlign:'left', width:'100%'}} label={question.possibleAnswers[0]} /> <br></br>
      <FlatButton rippleColor="tomato" labelStyle={{textTransform: 'capitalize'}} style={{textAlign:'left', width:'100%'}} label={question.possibleAnswers[1]} /> <br></br>
      <FlatButton rippleColor="lime" labelStyle={{textTransform: 'capitalize'}} style={{textAlign:'left', width:'100%'}} label={question.correctAnswer} /><br></br>
      <FlatButton rippleColor="tomato" labelStyle={{textTransform: 'capitalize'}} style={{textAlign:'left', width:'100%'}} label={question.possibleAnswers[2]} />
    </CardActions>
  </Card>
);

let language = ["Javascript", "Python", "Ruby"]

let question = {
    text:'What is the purpose of the DOCTYPE declaration?',
    correctAnswer:'It tells the browser what type of document your HTML file is.',
    possibleAnswers:['It tells the HTML file how to render','It tells the DOM where to start','It lets other developers know where the beginning of the code is'],
    language:'HTML'}

export default QuestionCard;
