//? SUBSCRIPTION MODAL
const formWrapper = document.querySelector("#mc_embed_signup");
const subscription = document.querySelector("#subscription");
const form = document.querySelector("form");
const submitBtn = document.querySelector("#mc-embedded-subscribe");

//? MAILCHIMP SERVICE
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
})(jQuery);
var $mcj = jQuery.noConflict(true);
