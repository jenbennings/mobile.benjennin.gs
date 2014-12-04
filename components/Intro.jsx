/** @jsx React.DOM */

var React = require('react');
var ScreenProjectImages = require('./ScreenProjectImages.jsx');

var Intro = React.createClass({
  getInitialProps: function() {
    return {
      data: {
        html: null,
        images: new Array
      }
    }
  },
  render: function() {
    return (
      <div className="ScreenProject">
        <div className="IntroContent">
        <div className="IntroTitle" dangerouslySetInnerHTML={{__html: this.props.data.html}} />
      </div>
        <ScreenProjectImages data={this.props.data.images} />
      </div>
    );
  }
});

module.exports = Intro;