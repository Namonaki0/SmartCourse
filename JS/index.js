// //? COUNTDOWN

let futureDate = new Date("Jan 29, 2021 22:12:50").getTime();
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

// setInterval(tellTime, 1000);

//? MENU

let open = document.querySelector(".open-menu");
let close = document.querySelector(".close-menu");
let nav = document.querySelector(".navigation");

open.addEventListener("click", () => {
  nav.classList.add("open-menu-sect");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-menu-sect");
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

//? MODAL

let subscribe = document.getElementById("subscribe");
let modal = document.querySelector("#modal");
let closeModal = document.getElementById("close");
let form = document.querySelector("#subscription-form");
const submit = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.submit();
});

//? MODAL FUNCTION

subscribe.onclick = function () {
  modal.style.display = "grid";
};

//? CLOSE MODAL BY CLICKING OUTSIDE

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//? CLOSE MODAL BY CLICKING X
closeModal.onclick = function () {
  modal.style.display = "none";
};

// //* VIEWPORT

let width = document.getElementById("width");
let onresize = function () {
  width.innerText = document.body.clientWidth;
  width.classList.add("display-width");
  setTimeout(() => {
    width.classList.remove("display-width");
  }, 2000);
};
window.addEventListener("resize", onresize);

//? COURSE OUTPUT TEMPLATE

let coursePage = document.querySelectorAll(".cta-course-page");
let pageTemplate = document.querySelector("#course-output");
const outputBtn = document.querySelector(".output-btn");

outputBtn.addEventListener("click", () => console.log("hi"));

// const children = coursePage.children;
coursePage.forEach((page) => {
  page.addEventListener("click", (e) => {
    if (e.target.classList.contains("pattern-design")) {
      console.log(e);
      console.log("hello");
      // pageTemplate.innerHTML = `<h1>welcome</h1>`;
    } else if (e.target.classList.contains("design-thinking")) {
      console.log(e);
      console.log("HO YEAH");
    }
    // const isBtn = e.target.contains(a);
    // console.log(isBtn);
  });
});
// coursePage.addEventListener("click", () => console.log("hello"));
