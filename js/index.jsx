var React = require('react');
var ReactDOM = require('react-dom');

console.log('test');

var Person = function() {
    var name = 'Hello Earth';
    return (
        <div className="person">
            {name}
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Person />, document.getElementById('app'));
});
