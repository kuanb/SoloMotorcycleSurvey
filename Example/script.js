/*
     This is a test, repeat, this is a test
*/
// Function to shuffle the elements of an array
function shuffle(array) {
	var counter = array.length, temp, index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
}
// Getting the appropiate chapter, question and answers and randomizing the question.
var c = fSUR.getChapters()[0];
var q = c.getQuestions()[0];
q.setQuestionText("Hi, I'm a random number: " + (Math.floor(Math.random() * (10 - 2 + 1)) + 2));
var answers = shuffle(q.getAnswers());
q.setAnswers(answers);
c.setQuestions(new Array(q));
fSUR.setChapters(new Array(c));