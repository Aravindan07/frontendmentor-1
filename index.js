function onClickHandler() {
  var shareIconsDiv = document.getElementsByClassName("social-share");
  var imgDiv = document.getElementsByClassName("img-div");
  var shareIcon = document.getElementById("shareIcon");

  if (shareIconsDiv[0].style.visibility === "visible") {
    shareIconsDiv[0].style.visibility = "hidden";
    imgDiv[0].style.backgroundColor = "hsl(210, 46%, 95%)";
    shareIcon.src = "./images/icon-share.svg";
  } else {
    shareIconsDiv[0].style.visibility = "visible";
    imgDiv[0].style.backgroundColor = "hsl(217, 19%, 35%)";
    shareIcon.src = "./images/icon-share-white.svg";
  }
}
