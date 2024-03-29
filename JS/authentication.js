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

//? GLOBAL
const signInWrapper = document.querySelector(".sign-in-wrapper");
const signInBtn = document.querySelector("#sign-in-btn");
const loggedInWrapper = document.querySelector("#logged-in-wrapper");
const logOutWrapper = document.querySelector("#log-out-wrapper");
const authWrapper = document.querySelector("#auth-wrapper");
const authOverallWrapper = document.querySelector("#auth-overall-wrapper");
const userInput = document.querySelectorAll(".user-input");
const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");
const regModal = document.querySelector("#reg-overall-wrapper");
const regUserWrapper = document.querySelector("#reg-user-wrapper");
const registeredWrapper = document.querySelector("#registered-wrapper");
const noAccountSpan = document.querySelector("#no-account-span");

//? SIGN-IN MODAL DISPLAY FUNCTION - LEAD UP TO REGISTRATION
signInBtn.addEventListener("click", () => {
  if (!authOverallWrapper.classList.contains("show")) {
    authOverallWrapper.classList.add("show");
  } else {
    authOverallWrapper.classList.remove("show");
  }
});

//? AUTHENTICATION STATUS
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    //? USER LOGGED IN
    loggedInWrapper.style.display = "flex";
    authWrapper.style.display = "none";
    signInBtn.innerText = `sign-out`;

    //? MODAL DISAPPEARS AFTER LOGIN
    if (loggedInWrapper.style.display == "flex") {
      setTimeout(() => {
        authOverallWrapper.classList.remove("show");
      }, 2000);
    }
    var user = firebase.auth().currentUser;

    //? IF THERE IS A USER - DISPLAY WELCOME TEXT
    if (user != null) {
      let name = user.displayName;
      let email = user.email;
      document.querySelector(
        ".user-log-in-message"
      ).innerHTML = `Logged in as ${email}`;
    }
  } else {
    //? USER NOT LOGGED IN
    authWrapper.style.display = "flex";
    loggedInWrapper.style.display = "none";
    signInBtn.style.display = "flex";
  }
});

//? REGISTRATION MODAL
noAccountSpan.addEventListener("click", () => {
  authOverallWrapper.style.display = "none";
  registeredWrapper.style.display = "none";
  regModal.style.display = "flex";
});

//? USER AUTHENTICATION WITH EMAIL AND PASSWORD
const userAuth = () => {
  let userEmail = document.querySelector("#user-email").value;
  let userPassword = document.querySelector("#user-password").value;

  //? SIGN IN WITH EMAIL AND PASSWORD
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      //? LOGGED IN
      var user = userCredential.user;
    })
    //? ERROR HANDLING
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });
};

//? CREATING USER ACCOUNT
const createUser = () => {
  let regUserEmail = document.querySelector("#reg-user-email").value;
  let regUserPassword = document.querySelector("#reg-user-password").value;

  //? REGISTER WITH EMAIL AND PASSWORD
  firebase
    .auth()
    .createUserWithEmailAndPassword(regUserEmail, regUserPassword)
    .then((userCredential) => {
      //? SIGNED IN
      var user = userCredential.user;
      registeredWrapper.style.display = "flex";
      regUserWrapper.style.display = "none";
      setTimeout(() => {
        regModal.style.display = "none";
      }, 2000);
    })
    //? ERROR HANDLING
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("NOT OK", +errorCode);
    });
};

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
    console.info(`Signed in as ${email}`);
  } else {
    //? NOT SIGNED IN
    console.info(`Not signed in`);
  }
});
