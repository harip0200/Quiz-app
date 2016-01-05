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
      skip (model) {
        this.transitionToRoute("quiz",parseInt(model.id)+1)
        },
      quit() {
        for(var i=0;i<Quiz.FIXTURES.length;i++){
          Quiz.FIXTURES[i].isAnswered=true;
        }
        this.transitionToRoute("quiz",11)
      },
      playAgain(){
        for(var i=0;i<Quiz.FIXTURES.length;i++){
          Quiz.FIXTURES[i].isAnswered=false;
        }
        this.transitionToRoute("quiz",1)

      }
    }
});
