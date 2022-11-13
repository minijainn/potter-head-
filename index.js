var rl=require("readline-sync");
console.log("Welcome to wizarding world")
var userName=rl.question("Whuts your name ?");
var score=0;
function play(question,answer){
  var cq=rl.question(question);
  if(cq.toUpperCase()===answer.toUpperCase()){
    console.log("Right");
    score=score+1;
  }
  else{
    console.log("Wrong");
  }
  console.log("your current score: "+score);
  console.log("------------------");
}

var hp_questionbank=[
  {
    question:"What's the name of the spell that shrinks objects? a:Down-Sized b:Pack c:Prior Incantato d:Reducio ",
    answer:"d"
  },
   {
    question:"Which spell helps you clean things? a:Bubble Srubble b:Portus c:Scrubio d:Scourgify ",
    answer:"d"
  },
 {
    question:"Which spell temporally creates a worthless duplicate of an object? a:Geminio b:Muliprano c:Obscuro d:Duplicato ",
    answer:"a"
  },
 {
    question:"Which spell makes your opponent paralyzes? a:Deletrius b:Petrificus Totalus c:Densaugeo d:Paralization ",
    answer:"b"
  },
 {
    question:"Lastly, what's the name of the killing spell? a:Abracadabra b:Anapneo c:Avada Kedavra d:Repelo Muggletum ",
    answer:"c"
  }
]
for(var i=0;i<hp_questionbank.length;i++){
  play(hp_questionbank[i].question,hp_questionbank[i].answer);
}
console.log("heyy "+userName+"your score is "+score);
console.log("thanks for taking the quiz here's your wizard hat!!!")