	// Fisher–Yates shuffle
	function shuffle(array) {
		var counter = array.length, temp, index;
	    // While there are elements in the array
	    while (counter > 0) {
	      // Pick a random index
	      index = Math.floor(Math.random() * counter);
	      // Decrease counter by 1
	      counter--;
	      // And swap the last element with it
	      temp = array[counter];
	      array[counter] = array[index];
	      array[index] = temp;
	  }
	  return array;
	}	
	var c = fSUR.getChapters()[0];
	var q = c.getQuestions()[0];
	q.setQuestionText("Random number:" + Math.floor(Math.random() * (10 - 2 + 1)) + 2);
	var answers = shuffle(q.getAnswers());
	q.setAnswers(answers);
	c.setQuestions(new Array(q));
	fSUR.setChapters(new Array(c));