var React = require('react');
var ReactDOM = require('react-dom');
import QuestionCard from './QuestionCard'
import NavBar from './AppBar';
import LoginPage from './LoginPage'

const SinglePage = () => {
      return(
            <div>
                  <NavBar />
                  <LoginPage />
                  {/*<QuestionCard />*/}
            </div>
      )
};

export default SinglePage;
