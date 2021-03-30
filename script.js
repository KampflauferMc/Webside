Gcolor(Math.random() * 100);
//Gcolor(100);
function Gcolor(x) {

  var laser = document.getElementById("laser");
  var text = document.getElementById("text");

  if (x >= 0 && x <= 40) {
      laser.style.color = "blue";
      text.style.color = "blue";

  } else if (x > 40 && x <= 72) {
      laser.style.color = "red";
      text.style.color = "red";

  } else if (x > 72 && x <= 82) {
      laser.style.color = "green";
      text.style.color = "green";

  } else if (x > 82 && x <= 92) {
      laser.style.color = "purple";
      text.style.color = "purple";

  } else if (x > 92 && x <= 94) {
      laser.style.color = "yellow";
      text.style.color = "yellow";

  } else if (x > 94 && x <= 96) {
      laser.style.color = "white";
      text.style.color = "white";


  } else if (x > 96 && x <= 99) {
      laser.style.color = "orange";
      text.style.color = "orange";

  } else if (x > 99 && x <= 100) {

      laser.style.color = "white";
      document.getElementById("laserhr").style.backgroundColor = "black";

      text.style.color = "white";
      document.getElementsById("textdiv").style.backgroundColor = "black";

      return true;
  }
}

     function CopyToClipboard(text) {
       var dummy = document.createElement("textarea");
           document.body.appendChild(dummy);
           dummy.value = text;
           dummy.select();
           document.execCommand("copy");
           document.body.removeChild(dummy);
     }

     function changeText(etv,text) {
       etv.innerHTML = text;
     }
