import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return $.getJSON('http://app.getlin.es/status/current.json');
    }
});
