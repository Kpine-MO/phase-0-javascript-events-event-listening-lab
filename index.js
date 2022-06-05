function addingEventListener() {
    var x = document.getElementById("input").value;
   return document.getElementById("value").innerHTML = "You wrote: " + x;
  }

  document.getElementById("input").addEventListener("input", addingEventListener, );