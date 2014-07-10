import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TestyENV.locationType
});

Router.map(function() {
  this.resource('lines', { path: '/' });
});

export default Router;
