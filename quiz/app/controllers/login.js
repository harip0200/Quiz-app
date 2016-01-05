import Ember from 'ember';

export default Ember.Controller.extend({
name:"",
actions:{
   login(){
    if(this.get("name")!=""){
      document.cookie = "name=" + this.get("name")
      this.transitionTo("quiz", 1)
    }
    }
}
});
