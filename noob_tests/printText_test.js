//trying out document.write

document.write('Hello World!');

var mytext = "Look, I'm alive!";
document.write('<p>' + mytext + '</p>');

var colour1 = "purple";
var colour2 = "pink";
document.write('<p>colour1: ' + colour1 + '<br>colour2: ' + colour2 + '</p>');

//trying out document.getElementById
//and having alert box

function getValue()
  {
  var x=document.getElementById("myHeader");
  alert(x.innerHTML);
  }
