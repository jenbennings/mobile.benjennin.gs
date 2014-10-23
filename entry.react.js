/** @jsx React.DOM */

var React = require('react');

var Site = React.createClass({
  render: function() {
    return (<div className="Site">
      Hey Ben
    </div>);
  }
})

React.renderComponent(<Site />, document.body);