import 'isomorphic-fetch';

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i < vars.length;i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
      return pair[1];
    }
  }
}

function fetchUser() {
  var headers = new Headers({
    Authorization: 'Bearer ' + getQueryVariable('accessToken')
  })
  return function(dispatch) {
    return fetch('/userdetails', {headers: headers}).then(function(res) {
      return res.json();
    }).then(function(user) {
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