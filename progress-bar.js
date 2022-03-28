var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        for (var j = 0; j < elem.length; j++) {
          elem[j].style.width = width + "%";
          elem[j].innerHTML = width + "%";
        }
      }
    }
  }
}
