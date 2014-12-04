/** @jsx React.DOM */

var React = require('react');
var ScreenProjectImages = require('./ScreenProjectImages.jsx');

var ScreenProject = React.createClass({
  getInitialProps: function() {
    return {
      data: {
        title: null,
        description: null,
        link: null,
        images: new Array
      }
    }
  },
  render: function() {
    var hasProjectInfo = this.props.data.title || this.props.data.description || this.props.data.link;
    return (<div className="ScreenProject">
      {hasProjectInfo &&
        <div className="ScreenProjectInfo">
          <div className="ScreenProjectInfoContent">
            {this.props.data.title &&
              <div className="ScreenProjectTitle"><h2>{this.props.data.title}</h2></div>
            }
            {this.props.data.description &&
              <div className="ScreenProjectDescription"><p>{this.props.data.description}</p></div>
            }
            {this.props.data.link &&
              <div className="ScreenProjectLink"><a target="_blank" href={this.props.data.link}>Check it</a></div>
            }
          </div>
        </div>
      }

      {this.props.data.images.length &&
        <ScreenProjectImages data={this.props.data.images} />
      }
    </div>);
  }
});

module.exports = ScreenProject;