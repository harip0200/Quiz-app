import DS from 'ember-data';



let quiz=DS.Model.extend({
     question:DS.attr('string'),
     optionA: DS.attr('string'),
     optionB: DS.attr('string'),
     isAnswered: DS.attr('boolen'),
     answer: DS.attr('string')
 });

quiz.reopenClass({
  FIXTURES: [
      {
        id:1,
        question:"Grand Central Terminal, Park Avenue, New York is the world's",
        optionA:"largest railway station",
        optionB:"highest railway station",
        isAnswered:false,
        answer:"largest railway station"
      },
      {
        id:2,
        question:"hello how are u",
        optionA:"fine",
        optionB:"not fine",
        isAnswered:false,
        answer:"fine"
      }
    ]
});
export default quiz
