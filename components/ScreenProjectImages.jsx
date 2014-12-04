/** @jsx React.DOM */

var React = require('react');

var ScreenProjectImages = React.createClass({
  getInitialState: function() {
    return {
      currentImage: 0
    }
  },
  getInitialProps: function() {
    return {
      data: new Array
    }
  },
  render: function() {
    var images = this.props.data.map(function(image, i) {
      var style = {
        backgroundImage: 'url("images/projects/'+ image +'")'
      }

      return (<div className="ScreenProjectImage" key={image} style={style} />);
    }.bind(this));

    return (<div className="ScreenProjectImages">
      {images}
    </div>);
  }
});

module.exports = ScreenProjectImages;