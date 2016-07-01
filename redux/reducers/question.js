import * as actions from '../actions/question';
import update from 'react-addons-update';

const initialState = {
  english: null,
  definition: null,
  image: null,
  correct: null
}

exports.questionReducer = function(state, action) {
  state = state || initialState;
  if (action.type === 'SHOW_QUESTION') {
    let newState = update(state, {
      $set: {
        english: action.question.english,
        definition: action.question.definition,
        image: action.question.image,
        correct: null
      }
    })
    state = newState;
  }
  else if (action.type === 'CHECK') {
    let newState = update(state, {
      $set: {
        english: state.english,
        definition: state.definition,
        image: state.image,
        correct: action.check
      }
    })
    state = newState;
  }
  return state;
}
