function toggleBibtex(id) {
  var x = document.getElementById(id);
  //var x = e.target;
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}