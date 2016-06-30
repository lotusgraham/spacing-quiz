var React = require('react');
var ReactDOM = require('react-dom');
import QuestionCard from './QuestionCard'
import NavBar from './AppBar';
import { connect } from 'react-redux'


const SinglePage = () => {
      return(
            <div>
                  <NavBar />
                  <QuestionCard />
            </div>
      )
};

export default SinglePage;
