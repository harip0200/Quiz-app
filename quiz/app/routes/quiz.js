import Ember from 'ember';

export default Ember.Route.extend({
  model:function (quNo) {
      console.log(this.store.all("quiz").get("content"));
      return quNo.id
  }
});
