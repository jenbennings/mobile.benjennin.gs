/** @jsx React.DOM */

var React = require('react');
var attachFastClick = require('fastclick')

attachFastClick(document.body);

const SCREENS = require('./screens.js');

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

var Intro = React.createClass({
  getInitialProps: function() {
    return {
      data: {
        title: null,
        images: new Array
      }
    }
  },
  render: function() {
    return (<div className="ScreenProject">
      {this.props.data.title &&
          <div className="IntroContent">
            {this.props.data.title &&
              <div className="IntroTitle"><h2>{this.props.data.title}</h2></div>
            }
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

var Site = React.createClass({
  getInitialState: function() {
    return {
      showInfo: false,
      infoPosition: 'relative'
    }
  },
  handleClickShowInfo: function(event) {
    event.preventDefault();
    this.setState({ showInfo: !this.state.showInfo });
  },
  renderScreen: function(screen, i) {
    return (<Screen key={i} data={screen} last={i === SCREENS.length-1} />);
  },
  handleScroll: function(event) {
    var position;
    var infoBuffer = 48;

    if(window.scrollY > window.innerHeight) {
      position = 'fixed';

      if(window.scrollY >= (SCREENS.length-1) * window.innerHeight - infoBuffer) {
        position = 'hidden';
      }
    } else {
      position = 'relative';
    }

    if(this.state.infoPosition !== position) this.setState({ infoPosition: position });
  },
  componentWillMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  render: function() {
    return (<div className="Site" data-show-info={this.state.showInfo}>
      <a className="ScreenProjectInfoToggle" href="#" onClick={this.handleClickShowInfo} data-position={this.state.infoPosition}>
        <span data-icon="info" />
        <span data-icon="close" />
      </a>
      {SCREENS.map(this.renderScreen)}
    </div>);
  }
})

React.renderComponent(<Site />, document.body);