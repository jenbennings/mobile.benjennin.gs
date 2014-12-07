/** @jsx React.DOM */

var React = require('react');
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
      {this.props.data.html &&
        <div className="ScreenHTML" dangerouslySetInnerHTML={{__html: this.props.data.html}} />
      }
      {this.props.data.project &&
        <ScreenProject data={this.props.data.project} />
      }
      {this.props.last &&
        <div className="Footer">
          <a href="mailto:mail@benjennin.gs">
            <span data-icon="email" />
            <span className="Tooltip"><span className="TooltipText">Email</span></span>
          </a>
          <a href="http://twitter.com/benjennin_gs" target="_blank">
            <span data-icon="twitter" />
            <span className="Tooltip"><span className="TooltipText">Twitter</span></span>
          </a>
          <a href="http://dribbble.com/benjennings" target="_blank">
            <span data-icon="dribbble" />
            <span className="Tooltip"><span className="TooltipText">Dribbble</span></span>
          </a>
          <a href="http://github.com/jenbennings" target="_blank">
            <span data-icon="github" />
            <span className="Tooltip"><span className="TooltipText">Github</span></span>
          </a>
        </div>
      }
    </div>);
  }
});

module.exports = Screen;