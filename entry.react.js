/** @jsx React.DOM */

var React = require('react');
var attachFastClick = require('fastclick');
var Screen = require('./components/Screen.jsx');

attachFastClick(document.body);

const SCREENS = require('./screens.js');

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
});

React.renderComponent(<Site />, document.body);