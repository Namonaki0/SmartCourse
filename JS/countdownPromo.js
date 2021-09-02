//? FEATURED COURSE COUNTDOWN PROMO
let futureDate = new Date("Sep 30, 2021 22:12:50").getTime();
let counter = document.querySelector("#counter");

function tellTime() {
  let now = new Date().getTime();
  let distance = futureDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //? ONGOING PROMOTION MESSAGE
  counter.innerHTML = `<div class="promo-countdown"><span class="hurry-message">Hurry up! promotion ends in </span><br/> ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</div>`;

  //? PROMOTION END MESSAGE
  if (distance < 0) {
    clearInterval(tellTime);
    counter.innerHTML = `<div class="promo-finished">this promotion is now finished</div>`;
  }
}

setInterval(tellTime, 1000);
