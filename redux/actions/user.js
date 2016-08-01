import 'isomorphic-fetch';

// function getQueryVariable(variable) {
//   var query = window.location.search.substring(1);
//   var vars = query.split("&");
//   for (var i=0;i < vars.length;i++) {
//     var pair = vars[i].split("=");
//     return pair[1];
//   }
// }

function fetchUser(token) {
  var headers = new Headers({
    Authorization: 'Bearer ' + token
  })
  return function(dispatch) {
    return fetch('/userdetails', {headers: headers}).then(function(res) {
      return res.json();
    }).then(function(user) {
      // console.log('Action: ', user);
      return dispatch(gotUser(user));
    })
  }
}

function gotUser(user) {
  return {
    type: 'GOT_USER',
    user: user
  }
}

exports.fetchUser = fetchUser;
exports.gotUser = gotUser;
