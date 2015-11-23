import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // store - responsible for makign requests to DB
    return this.store.findAll('message');

    // Get rid of old code after using the adapter.
    // return Ember.$.getJSON('/api/v1/messages').then(function(response){
    //   return response.messages;
    // });
  }
});
