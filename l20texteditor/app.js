var gettextarea = document.getElementById("textarea");

function boldfunc() {
  gettextarea.style.fontWeight = "bold";
}
function italicfunc() {
  gettextarea.style.fontStyle = "italic";
}
function underlinefunc() {
  gettextarea.style.textDecoration = "underline";
}
function lalgfunc() {
  gettextarea.style.textAlign = "left";
}
function calgfunc() {
  gettextarea.style.textAlign = "center";
}
function ralgfunc() {
  gettextarea.style.textAlign = "right";
}
function upcasefunc() {
  gettextarea.style.textTransform = "uppercase";
}
function lwcasefunc() {
  gettextarea.style.textTransform = "lowercase";
}
function capcasefunc() {
  gettextarea.style.textTransform = "capitalize";
}
function clearfunc() {
  gettextarea.style.fontWeight = "normal";
  gettextarea.style.fontStyle = "normal";
  gettextarea.style.textDecoration = "none";
  gettextarea.style.textAlign = "left";
  gettextarea.value = "";
}
