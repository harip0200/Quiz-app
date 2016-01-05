import Ember from 'ember';
import Quiz from "../models/quiz"
export default Ember.Controller.extend({
  score:"0",
  actions:{
    update (model,val) {
      if(model.answer==val)
        {
          this.set("score",parseInt(this.get("score"))+1)
        }
      this.transitionToRoute("quiz",parseInt(model.id)+1)
      },
      skip (i) {
        this.transitionToRoute("quiz",parseInt(i)+1)
        },
      quit() {
        this.transitionToRoute("quiz",11)
      },
      playAgain(){

      }
    }
});
