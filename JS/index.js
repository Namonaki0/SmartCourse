// //? COUNTDOWN

let futureDate = new Date("Apr 20, 2021 22:12:50").getTime();
let counter = document.querySelector("#counter");

function tellTime() {
  let now = new Date().getTime();

  let distance = futureDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  counter.innerHTML = `<div class="promo-countdown"><span class="hurry-message">Hurry up! this promotion ends in </span><br/> ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</div>`;

  if (distance < 0) {
    clearInterval(tellTime);
    counter.innerHTML = `<div class="promo-finished">this promotion is now finished</div>`;
  }
}

setInterval(tellTime, 1000);

//? MENU

const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const nav = document.querySelector(".navigation");
const body = document.querySelector("body");

open.addEventListener("click", () => {
  open.style.display = "none";
  nav.classList.add("open-menu-sect");
  body.style.overflowY = "hidden";
});

close.addEventListener("click", () => {
  nav.classList.remove("open-menu-sect");
  body.style.overflowY = "unset";
  open.style.display = "unset";
});

//? DROP-DOWN + ICON CHANGE

const btnSliders = document.querySelectorAll(".btn-slider");
const termsContent = document.querySelectorAll(".terms-content");
const content = document.querySelector(".content");
const spanSign = document.querySelectorAll(".plus-sign");

btnSliders.forEach((slider) => {
  slider.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-slider")) {
      const sliderPosition = e.target.classList.length;

      switch (sliderPosition) {
        case 1:
          termsContent[0].classList.toggle("active");
          spanSign[0].classList.toggle("minus-sign");
          break;
        case 2:
          termsContent[1].classList.toggle("active");
          spanSign[1].classList.toggle("minus-sign");
          break;
        case 3:
          termsContent[2].classList.toggle("active");
          spanSign[2].classList.toggle("minus-sign");
          break;
        default:
          return;
      }
    }
  });
});

//? SUBSCRIBE MODAL

let subscribe = document.querySelector("#subscribe");
let modal = document.querySelector("#modal");

//? SUBSCRIBE MODAL FUNCTION

// subscribe.onclick = function () {
//   modal.style.display = "grid";
//   modal.style.animationName = "animatetop";
//   modal.style.opacity = "1";
//   modal.style.visibility = "visible";
//   modal.style.pointerEvents = "all";
// };
//? CLOSE MODAL BY CLICKING OUTSIDE

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

//? CLOSE MODAL BY CLICKING X
// closeModal.onclick = function () {
//   modal.style.display = "none";
// };
