document.getElementById("start").addEventListener("click", rain);
document.getElementById("start").addEventListener("click", background);

function rain() {
  var elem = document.getElementById("nyan");
  var pos = 0;
  var id = setInterval(frame, 40);
  elem.style.display = "block";
  document.getElementById("start").style.display = "none";

  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "%"; //writes 100% in "pos" in line 5; giving it a value
      elem.style.left = pos + "%";
    }
  }
}

function background() {
  document.getElementsByTagName("body").src = "./pics/bg.png";
  console.log("bg");
}
