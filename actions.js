require('isomorphic-fetch');

var GET_USER_SUCCESS = 'GET_USER_SUCCESS';
var getUserSuccess = function(user){
    return {
        type: GET_USER_SUCCESS,
        user: user
    }
}

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

var getUser = function() {
    return function(dispatch) {
        var url = 'http://localhost:3000/user';
        return fetch(url).then(function(res) {
                if (res.status < 200 || res.status >= 300) {
                    var error = new Error(response.statusText);
                    error.res = res;
                    throw error;
                }
                return res;
            })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                return dispatch(
                    getUserSuccess(data)
                );
            }).catch(function(error) {
                return dispatch(
                    getUserError(error)
                );
            })
    };
}

var getQuestions = function() {
    return function(dispatch) {
        var url = 'http://localhost:3000/flashcards';
        return fetch(url).then(function(res) {
                if (res.status < 200 || res.status >= 300) {
                    var error = new Error(response.statusText);
                    error.res = res;
                    throw error;
                }
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
