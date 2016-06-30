var actions = require('./actions');
var update = require('react-addons-update');

let initialState = {
  "english": "Horse",
  "definition": "A quadripedal animal which may or may not kick you to death.",
  "image": "http://buzzsharer.com/wp-content/uploads/2015/06/beautiful-running-horse.jpg"
  }


    // let i = 0;


var flashCardsReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.GET_QUESTIONS_SUCCESS) {
        console.log(action);
        var newState = update(state, {

            questions: {
                $set: state.questions
            }
        });
        // console.log("==========")
        // console.log(newState)
        return newState;
    }
    return state;

}

exports.flashCardsReducer = flashCardsReducer;
// exports.initialState = initialState;
// exports.newState = newState
