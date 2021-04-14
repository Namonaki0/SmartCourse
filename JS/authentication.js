// const { listenerCount } = require("node:events");

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
firebase.analytics();

//? AUTHENTICATION

window.addEventListener("DOMContentLoaded", (e) => {
  console.log(e.value);
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    //? USER LOGGED IN
    document.querySelector("#logged-in-wrapper").style.display = "flex";
    document.querySelector("#auth-wrapper").style.display = "none";

    var user = firebase.auth().currentUser;

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
  }
});

const userAuth = () => {
  let userEmail = document.querySelector("#user-email").value;
  let userPassword = document.querySelector("#user-password").value;
  // console.log(userEmail, userPassword);

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      //? LOGGED IN
      var user = userCredential.user;
      document.querySelector("#sign-in-btn").innerText = "LOGOUT";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error: " + errorMessage);
    });
};

const logout = () => {
  firebase.auth().signOut();
};

const auth = firebase.auth();

auth.onAuthStateChanged(function (user) {
  if (user) {
    let email = user.email;
    console.log(`${email} signed in`);
    //is signed in
  } else {
    console.log(`${email} not signed in`);
    //not signed in
  }
});

// document.addEventListener("DOMContentLoaded", (e) => {
//   const app = firebase.app();
// });

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   firebase
//     .auth()
//     .SignInWithPopup(provider)
//     .then((result) => {
//       const user = result.user;
//       document.write(`Hi, ${user.displayName}`);
//       console.log(user);
//     })
//     .catch(err);
// }
