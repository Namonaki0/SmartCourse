//? SUBSCRIBE MODAL

const formWrapper = document.querySelector("#mc_embed_signup");
const subscription = document.querySelector("#subscription");
const form = document.querySelector("form");
const submitBtn = document.querySelector("#mc-embedded-subscribe");

//? SHOW SUBSCRIPTION MODAL

form.addEventListener("submit", (e) => {
  setTimeout(() => {
    location.replace("index.html");
  }, 3000);
  console.log(e);
})(
  // function showModal(e) {
  //   e.preventDefault();
  //   formWrapper.classList.toggle("show");
  //   document.body.style.overflowY = "hidden";
  // }

  function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
    fnames[1] = "FNAME";
    ftypes[1] = "text";
  }
)(jQuery);
var $mcj = jQuery.noConflict(true);
