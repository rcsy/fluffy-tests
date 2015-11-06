//defining some variables
var right = 0;
var wrong = 0;
var a = 0;
var b = 0;



function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;
    if (keys[13]) { // pressed ENTER
	     check();
    }
}



function newGame(){
  var a = Math.floor((Math.random() * 1000) + 1)
  var b = Math.floor((Math.random() * 1000) + 1)
  var x = document.getElementById("question");
  x.innerHTML = "What is " + a + " x " + b + "?";
}

function check(){
    var question = "What is " + a + " times " + b + "?";
    var answer = document.getElementById("answer").value;

    if (a * b == answer) {
	     var msg = "YAY!";
	      document.getElementById("result").innerHTML = msg;
        document.getElementById('answer').value = "";
        right++;
	      newGame();
      } else {
	      var msg = "Try again!";
	      document.getElementById("result").innerHTML = msg;
	      document.getElementById('answer').value = "";
        wrong++;
	    }
    var msg = "You were right " + right + " times!";
    document.getElementById("score").innerHTML = msg;
}
newGame();
