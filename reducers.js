var actions = require('./actions');
var update = require('react-addons-update');
var initialState = {
    questions: [],
    user: "TestUser"
}

var flashCardsReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.GET_QUESTIONS_SUCCESS) {
        var newState = update(state, {
            questions: {
                $set: action.questions.questions
            }
        });
        return newState;
    }
    return state;

}

exports.flashCardsReducer = flashCardsReducer;
