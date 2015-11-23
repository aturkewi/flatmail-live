import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // 
    return Ember.$.getJSON('/api/v1/messages').then(function(response){
      return response.messages;
    });
  }
});
