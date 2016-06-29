require('isomorphic-fetch');

var GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
var getQuestionsSuccess = function(questions) {
    return {
        type: GET_QUESTIONS_SUCCESS,
        questions: questions
    }
}

var GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR';
var getQuestionsError = function(questions) {
    return {
        type: GET_QUESTIONS_ERROR,
        error: errror
    }
}

var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
    return {
        type: MAKE_GUESS,
        guess: guess
    };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    };
};

var BUTTON_CLICK = 'BUTTON_CLICK';
var buttonClick = function() {
    return {
        type: BUTTON_CLICK
    };
};


var getQuestions = function() {
    return function(dispatch) {
        var url = 'http://localhost:3000/flashcards';
        return fetch(url).then(function(res) {
                console.log('I am the ghost.');
                if (res.status < 200 || res.status >= 300) {
                    var error = new Error(response.statusText);
                    error.res = res;
                    throw error;
                }
                console.log(res);
                return res;
            })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {

                return dispatch(
                    getQuestionsSuccess(data)
                );
            }).catch(function(error) {
                return dispatch(
                    getQuestionsError(error)
                );
            })
    };
}


exports.BUTTON_CLICK = BUTTON_CLICK;
exports.buttonClick = buttonClick;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.GET_QUESTIONS_SUCCESS = GET_QUESTIONS_SUCCESS;
exports.getQuestionsSuccess = getQuestionsSuccess;
exports.GET_QUESTIONS_ERROR = GET_QUESTIONS_ERROR;
exports.getQuestionsError = getQuestionsError;

exports.getQuestions = getQuestions;
