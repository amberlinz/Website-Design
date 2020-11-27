function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "<h2>join our newsletter</h2>") {
    x.innerHTML = "<h2>Thanks for signing up!</h2>";
  }
  // else {
  //   x.innerHTML = "join our newsletter";
  // }
}

function myFunction1() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
