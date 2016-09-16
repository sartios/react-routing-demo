var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var Home = require('./home');
var Address = require('./address');
var NotFound = require('./not-found');

var App = React.createClass({
  render: function(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}/>
        <Route path='/address' component={Address}/>
        <Route path='*' component={NotFound}/>
      </Router>);
  }
});

module.exports = App;
