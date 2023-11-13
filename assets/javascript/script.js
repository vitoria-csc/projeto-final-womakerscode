const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
const imagesWidth = window.innerHeight > window.innerWidth ? window.innerWidth : 500;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * imagesWidth}px)`;
}

setInterval(carrossel, 1800);
