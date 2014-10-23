/** @jsx React.DOM */

var React = require('react');

const SCREENS = require('./screens.js');

var Screen = React.createClass({
  getInitialProps: function() {
    return {
      data: {
        title: null,
        description: null,
        link: null,
        images: new Array,
        html: null
      }
    }
  },
  render: function() {
    var isProjectSlide = this.props.data.title || this.props.data.description;

    return (<div className="Screen">
      {this.props.data.html &&
        <div className="ScreenHTML" dangerouslySetInnerHTML={{__html: this.props.data.html}} />
      }
      {isProjectSlide &&
        <div className="ScreenProject">
          {this.props.data.title &&
            <div className="ScreenProjectTitle">{this.props.data.title}</div>
          }
          {this.props.data.description &&
            <div className="ScreenProjectDescription">{this.props.data.description}</div>
          }
          {this.props.data.link &&
            <div className="ScreenProjectLink"><a target="_blank" href={this.props.data.link}>Check it</a></div>
          }
        </div>
      }
    </div>);
  }
});

var Site = React.createClass({
  renderScreen: function(screen, id) {
    return (<Screen data={screen} id={id} />);
  },
  render: function() {
    return (<div className="Site">
      {SCREENS.map(this.renderScreen)}
    </div>);
  }
})

React.renderComponent(<Site />, document.body);