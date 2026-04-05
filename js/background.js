const images = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg", "07.jpeg", "08.jpeg", "09.jpeg", "10.jpeg"];

const body = document.querySelector("body");
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImage = `./img/${chosenImg}`;

function setBackground() {
  body.style.background = `url(${bgImage}) no-repeat center center/cover`;
}
setBackground();

window.addEventListener("resize", setBackground);