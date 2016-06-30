var actions = require('./actions');
var update = require('react-addons-update');
var initialState = {
    count: 1,
    questions: [],
    user: "TestUser"
}

var flashCardsReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.GET_QUESTIONS_SUCCESS) {
        var newState = update(state, {
            questions: {
                $set: action.questions
            },
            count: {
                $set: state.count + 1
            }
        });
        // console.log("==========")
        // console.log(newState)
        return newState;
    }
    console.log("I am here")
    return state;

}

exports.flashCardsReducer = flashCardsReducer;
