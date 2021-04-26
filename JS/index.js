//? MENU

const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const nav = document.querySelector(".navigation");
const body = document.querySelector("body");

const openMenu = () => {
  open.style.display = "none";
  nav.classList.add("open-menu-sect");
  body.style.overflowY = "hidden";
};

const closeMenu = () => {
  nav.classList.remove("open-menu-sect");
  body.style.overflowY = "unset";
  open.style.display = "unset";
};

close.onkeydown = (e) => {
  if (e.keyCode === 13) {
    nav.classList.remove("open-menu-sect");
    body.style.overflowY = "unset";
    open.style.display = "unset";
  }
};

//? DROP-DOWN + ICON CHANGE

const btnSliders = document.querySelectorAll(".btn-slider");
const termsContent = document.querySelectorAll(".terms-content");
const content = document.querySelectorAll(".content");
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
