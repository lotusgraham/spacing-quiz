import * as actions from '../actions/user';
import update from 'react-addons-update';

exports.userReducer = function(state = {}, action) {
  if (action.type === 'GOT_USER') {
    var newState = update(state, {
      $set: {
        id: action.user._id,
        fullName: action.user.fullName,
        avatar: action.user.avatar
      }
    })
    state = newState;
  }
  return state;
}
