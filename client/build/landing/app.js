/*
 Firebase Authentication Working Example, JavaScript, CSS, and HTML crafted with love and lots of coffee.
 (c) 2016, Ron Royston, MIT License
 https://rack.pub
 
 1. ..................................................................INITIALIZE
    FIREBASE CONFIG
    INITIALIZE FIREBASE WEB APP
    REDEFINE GLOBAL DOCUMENT AS LOCAL DOC
 2. ...................................................................VARIABLES
    ACCOUNT PAGE
    ACK / EMAIL ACTION HANDLER PAGE
    PRIVATE PAGE
    PUBLIC PAGE
    SHARED
 3. .............................................................EVENT LISTENERS
    ACCOUNT PAGE
    PRIVATE PAGE
    SHARED
    SOCIAL MEDIA BUTTONS
 4. ............................................................FIREBASE METHODS
    INITIALIZE FIREBASE WEB APP
    FIREBASE AUTH STATE CHANGE METHOD
 5. ...................................................................FUNCTIONS
    ACCOUNT PAGE
    ACK / EMAIL ACTION HANDLER PAGE
    LOGIN PAGE
    PUBLIC PAGE 
    SHARED
 6. ............................................................REVEALED METHODS
    ADD NODES WITH DATA TO REALTIME DATABASE
*/


/*

INITIALIZE

*/

(function() {

  // FIREBASE CONFIG
  

  var config = {
    apiKey: "AIzaSyAS7h-vHTaCWUiW7W2VM84tMzYA7f5PD6U",
    authDomain: "login-52bba.firebaseapp.com",
    databaseURL: "https://login-52bba.firebaseio.com",
    projectId: "login-52bba",
    storageBucket: "login-52bba.appspot.com",
    messagingSenderId: "388863529953"
  };

firebase.initializeApp(config);

  console.log(config);

// GET ELEMENTS
const txtEmail = document.getElementById(email2);
const txtPassword = document.getElementById(password2);
const btnLogin = document.getElementById(loginbutton);
const btnSignup = document.getElementById(signupbutton);
// const btnLogout = document.getElementById(email2);

// ADD LOGIN EVENT

  //SHARED  
  btnLogin.addEventListener("click", e => {
      // Get email annd pass
    const email = txtEmail.value;
    const pass = txtPassword2.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);

    promise.catch(e => console.log(e.message));

  });


          


}());