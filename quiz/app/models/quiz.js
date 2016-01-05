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
          question:"Who was the first man to fly around the earth with a spaceship?",
          optionA:"Gagarin ",
          optionB:"berilin",
          isAnswered:false,
          answer:"Gagarin "
        },
        {
          id:2,
          question:"What color is cobalt?",
          optionA:"Blue ",
          optionB:"white",
          isAnswered:false,
          answer:"Blue"
        },
        {
          id:3,
          question:"Which planet is nearest the sun?",
          optionA:"Mercury ",
          optionB:"Earth",
          isAnswered:false,
          answer:"Mercury"
        },
        {
          id:4,
          question:"How long is the Great Wall of China?",
          optionA:"4500 miles ",
          optionB:"4000 miles",
          isAnswered:false,
          answer:"4000 miles"
        },
        {
          id:5,
          question:"How many stars feature on the flag of New Zealand?",
          optionA:"Four stars",
          optionB:"Seven Stars",
          isAnswered:false,
          answer:"Four stars"
        },
        {
          id:6,
          question:"How many oscars did the Titanic movie got?",
          optionA:"Eleven ",
          optionB:"Eight",
          isAnswered:false,
          answer:"Eleven"
        },
        {
          id:7,
          question:"In which city did Romeo and Julia live?",
          optionA:"bracil ",
          optionB:"Verona",
          isAnswered:false,
          answer:"Verona"
        },
        {
          id:8,
          question:"What is the national sport in Japan?",
          optionA:"Table Tennis",
          optionB:"Sumo Wrestling",
          isAnswered:false,
          answer:"Sumo Wrestling"
        },
        {
          id:9,
          question:"How long is an Olympic swimming pool?",
          optionA:"Fifty meters",
          optionB:"Fifty five meters",
          isAnswered:false,
          answer:"Fifty meters"
        },
        {
          id:10,
          question:"What was the former name of New York?",
          optionA:"New Amsterdam",
          optionB:"York Amster",
          isAnswered:false,
          answer:"New Amsterdam"
        }
    ]
});

export  default quiz
