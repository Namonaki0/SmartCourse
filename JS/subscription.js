//? SUBSCRIBE MODAL

const formWrapper = document.querySelector("#mc_embed_signup");
const subscription = document.querySelector("#subscription");
const form = document.querySelector("form");

//? SHOW SUBSCRIPTION MODAL

function showModal(e) {
  e.preventDefault();
  formWrapper.classList.toggle("show");
  document.body.style.overflowY = "hidden";
}

subscription.addEventListener("click", showModal);

//? CLOSE MODAL BY CLICKING OUTSIDE

window.onclick = function (event) {
  console.log(event.target);
  if (event.target == formWrapper) {
    formWrapper.style.display = "";
    formWrapper.classList.remove("show");
    document.body.style.overflowY = "";
  } else if (event.target == courseOutputWrapper) {
    courseOutputWrapper.style.display = "none";
    document.body.style.overflowY = "unset";
  } else {
    return;
  }
};

(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
})(jQuery);
var $mcj = jQuery.noConflict(true);
