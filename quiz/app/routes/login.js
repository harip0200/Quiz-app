import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var value = ";" + document.cookie;
    var parts = value.split(";name=");
    if (parts.length == 2){
      this.transitionTo("quiz",1)
    }
});
