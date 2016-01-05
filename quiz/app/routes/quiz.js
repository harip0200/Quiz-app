import Ember from 'ember';

export default Ember.Route.extend({
  model:function (que) {
      console.log(this.store.all("quiz").get("content"));
    return que.id
  }
});
