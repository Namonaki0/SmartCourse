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

setInterval(tellTime, 1000);

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

let subscribe = document.querySelector("#subscribe");
let modal = document.querySelector("#modal");

// //? MODAL FUNCTION

subscribe.onclick = function () {
  modal.style.display = "grid";
  modal.style.animationName = "animatetop";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
  modal.style.pointerEvents = "all";
};

// //? CLOSE MODAL BY CLICKING OUTSIDE

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// //? CLOSE MODAL BY CLICKING X
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

// coursePage.addEventListener("click", (e) => );

class PageLoad {
  constructor() {
    this.$coursePage = document.querySelectorAll(".cta-course-page");
    this.pageTemplate = document.querySelector("#course-output");
    this.$outputBtn = document.querySelector("#output-btn");

    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener("DOMcontentloaded", () => {
      // this.paths();
      this.pageLoad(page);
      this.handleClick(page);
    });

    this.$coursePage.forEach((page) => {
      page.addEventListener("click", (e) => {
        this.handleClick(page);
        e.preventDefault();
        console.log(e);
      });
    });
  }

  // //? THIS WORKS
  // template(event) {
  //   window.addEventListener("load", (event) => {
  //     pageTemplate.innerHTML = `
  //     <h1 class="page">Hello</h1>
  //     <p>loads of content</p>
  //     `;
  //   });
  // }

  handleClick(page) {
    const isPatternDesign = page.classList.contains("pattern-design");
    const isDesignThinking = page.target.classList === "design-thinking";
    const isUxUiFundamentals = page.target.classList === "ux-ui-fundamentals";
    const isPythonBootcamp = page.target.classList === "python-bootcamp";
    const isComputerScience = page.target.classList === "computer-science";
    const isHtmlCssBootcamp = page.target.classList === "html-css-bootcamp";

    console.log(isPatternDesign);

    if (isPatternDesign) {
      console.log(page);
      // template(event);
      console.log("hello");
    }
  }
}

new PageLoad();

let pageTemplate = document.querySelector("#course-output");

pageTemplate.addEventListener("load", pageLoad);

function pageLoad(page) {
  // window.addEventListener("load", () => {
  //   console.log(window);
  document.addEventListener("load", () => {
    console.log(window);
    this.pageTemplate.innerHTML = `
      <h1 class="page">Hello</h1>
      <p>loads of content</p>
      `;
  });

  // });
}

// pageLoad();
