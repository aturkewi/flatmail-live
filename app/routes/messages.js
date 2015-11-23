import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [Ember.object.create({body:"First object"}), Ember.object.create({body:"Please me from the list."})]
  }
});
