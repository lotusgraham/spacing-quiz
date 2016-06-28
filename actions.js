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
var newGame = function(){
    return {
        type: NEW_GAME
    };
};

var getQuestions = function() {
    return function(dispatch) {
        var url = 'http://localhost:8081/questions';
        return fetch(url).then(function(res) {
            console.log('Array of terms?: ', res);
        });
    }
}

exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.GET_QUESTIONS_SUCCESS = GET_QUESTIONS_SUCCESS;
exports.getQuestionsSuccess = getQuestionsSuccess;
exports.GET_SCORE_ERROR = GET_SCORE_ERROR;
exports.getQuestionsError = getQuestionsError;
