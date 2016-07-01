var React = require('react');
var ReactDOM = require('react-dom');
import QuestionCard from './QuestionCard'
import NavBar from './AppBar';
// import LoginPage from './LoginPage'

const SinglePage = () => {
      return(
            <div>
                  <NavBar />
                  <QuestionCard />
            </div>
      )
};

export default SinglePage;

//

//
// const SinglePage = () => {
//       return(
//             <div>
//                   <NavBar />
//                   <QuestionCard />
//             </div>
//       )
// };
//
// var mapStateToProps = function(state, props) {
//     return {
//         open: state
//     };
// };
//
//
// var Container = connect(mapStateToProps)(SinglePage);
//
// export default Container;
