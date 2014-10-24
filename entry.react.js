/** @jsx React.DOM */

var React = require('react');

const SCREENS = require('./screens.js');

var ScreenProjectImages = React.createClass({
  getInitialState: function() {
    return {
      currentImage: 0,
    }
  },
  getInitialProps: function() {
    return {
      data: new Array
    }
  },
  handleClick: function() {
    var currentImage = this.state.currentImage;
    currentImage++;

    if(this.props.data.length < currentImage+1) currentImage = 0;

    this.setState({ currentImage: currentImage });
  },
  render: function() {
    var images = this.props.data.map(function(image, i) {
      var style = {
        backgroundImage: 'url("images/projects/'+ image +'")',
        opacity: this.state.currentImage === i ? 1 : 0
      }

      return (<div className="ScreenProjectImage" key={image} style={style} />);
    }.bind(this));

    return (<div className="ScreenProjectImages" onClick={this.handleClick}>
      {images}
    </div>);
  }
});

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
  getInitialState: function() {
    return {
      showInfo: false
    }
  },
  handleClickShowInfo: function(event) {
    event.preventDefault();
    this.setState({ showInfo: !this.state.showInfo });
  },
  render: function() {
    var hasProjectInfo = this.props.data.title || this.props.data.description || this.props.data.link;
    return (<div className="ScreenProject" data-show-info={this.state.showInfo}>
      {hasProjectInfo &&
        <a className="ScreenProjectInfoToggle" href="#" onClick={this.handleClickShowInfo}>Info</a>
      }
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

var Screen = React.createClass({
  getInitialProps: function() {
    return {
      data: {
        project: false,
        html: null
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
    </div>);
  }
});

var Site = React.createClass({
  renderScreen: function(screen, i) {
    return (<Screen key={i} data={screen} />);
  },
  render: function() {
    return (<div className="Site">
      {SCREENS.map(this.renderScreen)}
    </div>);
  }
})

React.renderComponent(<Site />, document.body);