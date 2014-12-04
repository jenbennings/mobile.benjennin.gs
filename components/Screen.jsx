/** @jsx React.DOM */

var React = require('react');
var Intro = require('./Intro.jsx');
var ScreenProject = require('./ScreenProject.jsx');

var Screen = React.createClass({
  getInitialProps: function() {
    return {
      data: {
        project: false,
        html: null,
        last: false
      }
    }
  },
  render: function() {
    return (<div className="Screen">
      {this.props.data.intro &&
        <Intro data={this.props.data.intro} />
      }
      {this.props.data.html &&
        <div className="ScreenHTML" dangerouslySetInnerHTML={{__html: this.props.data.html}} />
      }
      {this.props.data.project &&
        <ScreenProject data={this.props.data.project} />
      }
      {this.props.last &&
        <div className="Footer">
          <a href="http://twitter.com/benjennin_gs" target="_blank">
            <span data-icon="email" />
            <span className="Tooltip">Email</span>
          </a>
          <a href="http://twitter.com/benjennin_gs" target="_blank">
            <span data-icon="twitter" />
            <span className="Tooltip">Twitter</span>
          </a>
          <a href="http://dribbble.com/benjennings" target="_blank">
            <span data-icon="dribbble" />
            <span className="Tooltip">Dribbble</span>
          </a>
          <a href="http://github.com/jenbennings" target="_blank">
            <span data-icon="github" />
            <span className="Tooltip">Github</span>
          </a>
        </div>
      }
    </div>);
  }
});

module.exports = Screen;