// var gettextarea = document.getElementById("textarea");
var getdivarea = document.getElementById("divarea");
getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

var getbtns = document.querySelectorAll(".btn");
// console.log(getbtns); //NodeList



getbtns.forEach(function (getbtn) {
  getbtn.addEventListener("click", function () {
    // var getcommand = getbtn.getAttribute("data-command");
    var getcommand = getbtn.dataset["command"];
    // console.log(getcommand);

    if (getcommand === "cleartext") {
      getdivarea.innerHTML = "";
    } else if (getcommand === "createLink" || getcommand === "insertImage") {
      let geturl = prompt("Enter your website link", "https://");
      document.execCommand(getcommand, false, geturl);
    } else if (getcommand === "foreColor") {
      // console.log(getbtn.value);
      document.execCommand(getcommand, false, getbtn.value);
    } else if (getcommand === "paste") {
      navigator.clipboard.readText().then(function (cliptext) {
        // console.log(cliptext);
        getdivarea.innerHTML += cliptext;
      });
    } else {
      document.execCommand(getcommand, false, null);
    }
  });
});

// function boldfunc() {
//   gettextarea.style.fontWeight = "bold";
// }

// function italicfunc() {
//   gettextarea.style.fontStyle = "italic";
// }

// function underlinefunc() {
//   gettextarea.style.textDecoration = "underline";
// }

// function lalgfunc() {
//   gettextarea.style.textAlign = "left";
// }

// function calgfunc() {
//   gettextarea.style.textAlign = "center";
// }

// function ralgfunc() {
//   gettextarea.style.textAlign = "right";
// }

function upcasefunc() {
  // gettextarea.style.textTransform = "uppercase";
  getdivarea.style.textTransform = "uppercase";
}

function lwcasefunc() {
  // gettextarea.style.textTransform = "lowercase";
  getdivarea.style.textTransform = "lowercase";
}

function capcasefunc() {
  // gettextarea.style.textTransform = "capitalize";
  getdivarea.style.textTransform = "capitalize";
}

// function clearfunc() {
//   gettextarea.style.fontWeight = "normal";
//   gettextarea.style.fontStyle = "normal";
//   gettextarea.style.textDecoration = "none";
//   gettextarea.style.textAlign = "left";
//   gettextarea.value = "";
// }

// execCommand(aCommandName(eventtype), aShowDefaultUI(false/true), aValueArgument );
