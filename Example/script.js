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
	var c = fSUR.getChapters()[0];
	var q = c.getQuestions()[0];
	q.setQuestionText("Random number: " + Math.floor(Math.random() * (10 - 2 + 1)) + 2);
	var answers = shuffle(q.getAnswers());
	q.setAnswers(answers);
	c.setQuestions(new Array(q));
	fSUR.setChapters(new Array(c));