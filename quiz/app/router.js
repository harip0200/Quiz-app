import Ember from 'ember';
import config from './config/environment';
const Router = Ember.Router.extend({
  location: config.locationType
});
Router.map(function() {
  this.route("quiz",{path:"/quiz/:id"})
  this.route("login")

});
export default Router;
