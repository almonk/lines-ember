import Ember from 'ember';

export default Ember.ObjectController.extend({
    showMessage: false,

    lineId: function() {
        return 'line--' + this.get('id');
    }.property('id'),

    messageId: function() {
        return 'line_message--' + this.get('id');
    }.property('id'),

    actions: {
        moreInfo: function() {
            Ember.$('.line').transition({ x: '-320px', opacity: '0' }, 340, 'snap');
            Ember.$('.line_message--' + this.get('id')).transition({ x: '-320px', opacity: '1' }, 340, 'snap');
            this.set('showMessage', true);
        },
        closeInfo: function() {
            console.log('close');
            Ember.$('.line').transition({ x: '0px', opacity: '1' }, 340, 'snap');
            Ember.$('.line_message').transition({ x: '320px', opacity: '0' }, 340, 'snap');
        }
    },
});

