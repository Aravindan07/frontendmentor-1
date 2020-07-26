function onClickHandler() {
  var shareIconsDiv = document.getElementsByClassName("social-share");
  var imgDiv = document.getElementsByClassName("img-div");
  var shareIcon = document.getElementById("shareIcon");
  var authorDiv = document.getElementsByClassName("author");
  var x = window.matchMedia("(max-width: 700px)");

  if (shareIconsDiv[0].style.visibility === "visible") {
    shareIconsDiv[0].style.visibility = "hidden";
    imgDiv[0].style.backgroundColor = "hsl(210, 46%, 95%)";
    shareIcon.src = "./images/icon-share.svg";
    if (x.matches) {
      authorDiv[0].style.visibility = "visible";
      imgDiv[0].style.bottom = "8%";
    }
  } else {
    shareIconsDiv[0].style.visibility = "visible";
    imgDiv[0].style.backgroundColor = "hsl(217, 19%, 35%)";
    shareIcon.src = "./images/icon-share-white.svg";
    if (x.matches) {
      authorDiv[0].style.visibility = "hidden";
      imgDiv[0].style.backgroundColor = "hsl(212, 23%, 69%)";
      imgDiv[0].style.bottom = "4%";
    }
  }
}
