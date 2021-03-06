import Ember from 'ember';
import Quiz from "../models/quiz"
export default Ember.Route.extend({
  model:function (quNo) {
    if(quNo.id<Quiz.FIXTURES.length){
      var value = ";" + document.cookie,
          parts = value.split(";name=");
      if (parts.length == 2){
        if(parts.pop().split(";").shift()){
          for(var i=0;i<Quiz.FIXTURES.length;i++){
            if(Quiz.FIXTURES[i].isAnswered==false){
              Quiz.FIXTURES[i].isAnswered=true;
              return Quiz.FIXTURES[i];
            }
          }
        }
      }
      else{
        this.transitionTo("login");
      }
    }
  }
});
