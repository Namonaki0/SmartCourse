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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
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
    document.querySelector("#auth-wrapper").style.display = "flex";
    document.querySelector("#logged-in-wrapper").style.display = "none";

    // No user is signed in.
  }
});

const userAuth = () => {
  let userEmail = document.querySelector("#user-email").value;
  let userPassword = document.querySelector("#user-password").value;
  console.log(userEmail, userPassword);

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
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
