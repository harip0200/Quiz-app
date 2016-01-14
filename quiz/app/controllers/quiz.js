import Ember from 'ember';
import Quiz from "../models/quiz"
export default Ember.Controller.extend({
  score:"0",
  question:Quiz.FIXTURES,
  time:"0",
  actions:{
        update (model,val) {
      if(model.answer==val)
        {
          this.set("score",parseInt(this.get("score"))+1);
        }
        this.set("time",0)
      this.transitionToRoute("quiz",parseInt(model.id)+1);
      },
      skip (model) {
        this.set("time",0)
        this.transitionToRoute("quiz",parseInt(model.id)+1);
        },
      quit() {
        var quest=this.get("question");
        for(var i=0;i<quest.length;i++){
          quest[i].isAnswered=true;
        }
        this.set("time",0)
        this.transitionToRoute("quiz",11)
      },
      playAgain(){
        var quest=this.get("question");
        for(var i=0;i<quest.length;i++){
          quest[i].isAnswered=false;
        }
        this.transitionToRoute("quiz",1);

      }
    }
});
