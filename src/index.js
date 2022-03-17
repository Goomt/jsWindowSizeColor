let title = document.querySelector("h1");
let body = document.querySelector("body");

function BackgroundChange() {
  let width = window.innerWidth;

  if (width <= 600) {
    body.classList.remove("WhiteBG");
    body.classList.remove("PurpleBG");
    body.classList.remove("OrangeBG");
    body.classList.add("BlueBG");
    title.classList.remove("BlackT");
    title.classList.add("WhiteT");
  } else if (width <= 1200 && width > 600) {
    body.classList.remove("BlueBG");
    body.classList.remove("OrangeBG");
    body.classList.remove("WhiteBG");
    body.classList.add("PurpleBG");
    title.classList.remove("BlackT");
    title.classList.add("WhiteT");
  } else if (width > 1200) {
    body.classList.remove("PurpleBG");
    body.classList.remove("WhiteBG");
    body.classList.remove("BlueBG");
    body.classList.add("OrangeBG");
    title.classList.remove("BlackT");
    title.classList.add("WhiteT");
  }
}
window.addEventListener("resize", BackgroundChange);
