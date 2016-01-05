import Ember from 'ember';

export default Ember.Controller.extend({
name=""
actions:{
  login(){
    if(name)
    document.cookie = "name=" + this.get(name)
    }
}
});
