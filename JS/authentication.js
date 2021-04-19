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

const signInWrapper = document.querySelector(".sign-in-wrapper");
const signInBtn = document.querySelector("#sign_in_btn");
const loggedInWrapper = document.querySelector("#logged-in-wrapper");
const logOutWrapper = document.querySelector("#log-out-wrapper");
const authWrapper = document.querySelector("#auth-wrapper");
const authOverallWrapper = document.querySelector("#auth-overall-wrapper");
const userInput = document.querySelectorAll(".user-input");
const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");

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

//? CHECK DOCUMENT STATE
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
    loggedInWrapper.style.display = "flex";
    authWrapper.style.display = "none";
    signInBtn.innerText = `sign-out`;
    // signInBtn.classList.add("second");

    // signInBtn.onclick = (e) => {
    //   console.log(authWrapper);
    //   if (e.target.innerText == "sign-out") {
    //     console.log("TREU");
    //     loggedInWrapper.style.display = "flex";
    //     document.querySelector(".main-auth-wrapper").style.display = "none";
    //   }
    // };

    //? MODAL DISAPPEARS AFTER LOGIN
    if (loggedInWrapper.style.display == "flex") {
      setTimeout(() => {
        authOverallWrapper.classList.remove("show");
      }, 2000);
    }
    var user = firebase.auth().currentUser;

    function myInitCode() {}

    //? IF THERE IS A USER THEN DISPLAY WELCOME TEXT
    if (user != null) {
      let name = user.displayName;
      let email = user.email;
      document.querySelector(
        ".user-log-in-message"
      ).innerHTML = `Logged in as ${email}`;
    }
  } else {
    //? CLOSING BY CLICKING OUTSIDE MODAL
    // window.onclick = (e) => {
    //   if (e.target == signInBtn) {
    //     authWrapper.style.display = "flex";
    //     loggedInWrapper.style.display = "none";
    //     signInBtn.style.display = "flex";
    //   } else if (
    //     e.target == authOverallWrapper ||
    //     e.target == authWrapper ||
    //     e.target == userEmail ||
    //     e.target == userPassword ||
    //     e.target == signInBtn
    //   ) {
    //     authWrapper.style.display = "flex";
    //   } else {
    //     return;
    //   }
    // };

    //? USER NOT LOGGED IN
    authWrapper.style.display = "flex";
    loggedInWrapper.style.display = "none";
    signInBtn.style.display = "flex";
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

//? CREATING USER ACCOUNT
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

//? LOGOUT FUNCTION - CHANGE USER WELCOME TEXT AFTER SIGN-OUT
const logout = () => {
  firebase.auth().signOut();
  signInBtn.innerText = `sign-in`;
  document.querySelector(".user-log-in-message").innerHTML = "";
  setTimeout(() => {
    authOverallWrapper.classList.remove("show");
  }, 2000);
};

//? STATE THROUGHOUT ENTIRE WEBSITE
const auth = firebase.auth();

auth.onAuthStateChanged(function (user) {
  if (user) {
    //? IS SIGNED IN
    let email = user.email;
    console.log(`${email} signed in`);
  } else {
    //? NOT SIGNED IN
    console.log(`Not signed in`);
  }
});
