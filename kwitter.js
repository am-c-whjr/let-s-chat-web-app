  var firebaseConfig = {
    apiKey: "AIzaSyC2J_s0KgrqXtNPSoxBHPopxeDVGCooH0I",
    authDomain: "let-s-chat-web-app-87579.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-87579-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-87579",
    storageBucket: "let-s-chat-web-app-87579.appspot.com",
    messagingSenderId: "340697205815",
    appId: "1:340697205815:web:388d4f2346920e524ac3b2",
    measurementId: "G-G4HYDN5Y5T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    window.location = "kwitter_room.html";
}
