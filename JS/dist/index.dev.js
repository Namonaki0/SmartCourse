// "use strict";

// // COUNTDOWN
// var futureDate = new Date("Sep 30, 2020 23:38:50").getTime();
// var x = document.querySelector(".countdown-wrapper");
// var promoText = document.querySelector(".promotion-banner");

// function tellTime() {
//   var now = new Date().getTime();
//   var distance = futureDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//   var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//   var seconds = Math.floor(distance % (1000 * 60) / 1000);
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//   if (distance < 0) {
//     clearInterval(tellTime);
//     x.style.background = "#ff7a14";
//     promoText.style.visibility = "hidden";
//     promoText.style.position = "absolute";
//     document.getElementById("countdown").innerHTML = "PROMOTION FINISHED";
//   }
// }

// setInterval(tellTime, 1000); // MENU

// var open = document.querySelector('.open-menu');
// var close = document.querySelector('.close-menu');
// var nav = document.querySelector('.navigation');
// var bg = document.querySelector('main');
// var cd = document.querySelector('.countdown-wrapper');
// var section = document.querySelector('section');
// open.addEventListener("click", function () {
//   nav.classList.add("open-menu-sect");
//   bg.style.opacity = .2;
//   cd.style.opacity = .2;
//   section.style.opacity = .2;
// });
// close.addEventListener("click", function () {
//   nav.classList.remove("open-menu-sect");
//   bg.style.opacity = 1;
//   cd.style.opacity = 1;
//   section.style.opacity = 1;
// }); // DROP-DOWN

// $(document).ready(function () {
//   $(".exp1").click(function (e) {
//     e.preventDefault();
//     $(".root1").slideToggle(300);
//   }).click();
//   $(".exp2").click(function (e) {
//     e.preventDefault();
//     $(".root2").slideToggle(300);
//   }).click();
//   $(".exp3").click(function (e) {
//     e.preventDefault();
//     $(".root3").slideToggle(300);
//   }).click();
// }); // DROP-DOWN ICON CHANGE

// function change1() {
//   if (document.getElementById("plus1").classList.contains('plus-sign')) document.getElementById("plus1").classList.toggle('minus-sign');
// }

// function change2() {
//   if (document.getElementById("plus2").classList.contains('plus-sign')) document.getElementById("plus2").classList.toggle('minus-sign');
// }

// function change3() {
//   if (document.getElementById("plus3").classList.contains('plus-sign')) document.getElementById("plus3").classList.toggle('minus-sign');
// } // MODAL

// var subscribe = document.getElementById("subscribe");
// var modal = document.getElementById("modal");
// var close = document.getElementById("close"); // MODAL FUNCTION

// subscribe.onclick = function () {
//   modal.style.display = "block";
// }; // CLOSE MODAL BY CLICKING OUTSIDE

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }; // CLOSE MODAL BY CLICKING X

// close.onclick = function () {
//   modal.style.display = "none";
// }; // NAVBAR EFFECT

// window.addEventListener("scroll", function () {
//   var navigation = document.querySelector("nav");
//   navigation.classList.add(".change", window.scrollY > 0);
// });
