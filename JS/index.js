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
const content = document.querySelectorAll(".content");
const spanSign = document.querySelectorAll(".plus-sign");

console.log(content);

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
