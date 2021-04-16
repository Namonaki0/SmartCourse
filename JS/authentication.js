//? FIREBASE CONFIGURATION
let firebaseApp = {};
(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyATXY1UvN2imRgwsLM1TZ2AowEX22QcFQM",
    authDomain: "smartcourse-authentication.firebaseapp.com",
    projectId: "smartcourse-authentication",
    storageBucket: "smartcourse-authentication.appspot.com",
    messagingSenderId: "282877508454",
    appId: "1:282877508454:web:c7847880520cec428126a7",
    measurementId: "G-T8SLX37Z4V",
  };
  firebase.initializeApp(firebaseConfig);

  firebaseApp = firebase;
})();

const signInBtn = document.querySelector("#sign_in_btn");
const loggedInWrapper = document.querySelector("#logged-in-wrapper");
const authWrapper = document.querySelector("#auth-wrapper");
const authOverallWrapper = document.querySelector("#auth-overall-wrapper");

signInBtn.addEventListener("click", () => {
  authOverallWrapper.classList.add("show");
});

//? AUTHENTICATION
window.addEventListener("onload", changeText);

function changeText(text) {
  const signInBtn = (document.querySelector(
    "#sign_in_btn"
  ).innerText = `${text}`);
}

function checkState() {
  if (document.readyState !== "loading") {
    console.log("document is already ready, just execute code here");
  }
  document.addEventListener("DOMContentLoaded", function () {
    console.log("document was not ready, place code here");
  });
}

//? AUTHENTICATION STATUS
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    //? USER LOGGED IN
    document.querySelector("#logged-in-wrapper").style.display = "flex";
    document.querySelector("#auth-wrapper").style.display = "none";
    signInBtn.style.display = "none";
    document.querySelector("#sign_out_btn").style.display = "flex";

    //? MODAL DISAPPEARS AFTER LOGIN
    if (loggedInWrapper.style.display == "flex") {
      console.log("LOGGED WRAPPER");
      setTimeout(() => {
        authOverallWrapper.classList.remove("show");
      }, 2000);
    }
    var user = firebase.auth().currentUser;

    function myInitCode() {}

    //? IF THERE IS A USER THEN DISPLAY WELCOME TEXT
    if (user != null) {
      let email_id = user.email;
      document.querySelector(
        "#welcome-text"
      ).innerHTML = `You are currently logged in as ${email_id}`;
    }
  } else {
    //? USER NOT LOGGED IN
    document.querySelector("#auth-wrapper").style.display = "flex";
    document.querySelector("#logged-in-wrapper").style.display = "none";
    signInBtn.style.display = "flex";
    document.querySelector("#sign_out_btn").style.display = "none";
  }
});

//? USER AUTHENTICATION WITH EMAIL AND PASSWORD
const userAuth = () => {
  let userEmail = document.querySelector("#user-email").value;
  let userPassword = document.querySelector("#user-password").value;

  //? SIGN IN WITH MAIL AND PASSWORD
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      //? LOGGED IN
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error: " + errorMessage);
    });
};

//? LOGOUT FUNCTION
const logout = () => {
  firebase.auth().signOut();
};

//? STATE FOR ENTIRE WEBSITE
const auth = firebase.auth();

auth.onAuthStateChanged(function (user) {
  if (user) {
    let email = user.email;
    console.log(`${email} signed in`);

    //? IS SIGNED IN
  } else {
    console.log(`Not signed in`);
    //? NOT SIGNED IN
  }
});
