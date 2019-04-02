
//making questions array
var questionBank = ["who is the leader of the avengers?","who is the father of thor?","who is the hulk?","what is captain americas sheild made of?"];

// randomize question selection
let ranQuestion = [Math.floor(Math.random() * questionBank.length)];
let question = questionBank[ranQuestion];
console.log(question);

// anserws to certian array question
question [0] = ["Captian America","Iron Man","Groot","Ant Man"]
// timer to answer question

//check if answer is correct

// of answer is correct show congrats page

// if answer is wrong show incorrect page

// if timer runs out show time out page
$("#question").text(question);